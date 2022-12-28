import merge from 'lodash/fp/merge';
import isNil from 'lodash/isNil';
import mapValues from 'lodash/mapValues';

import compareValues, { castString, Change } from './compareValues';
import {
  isArrayOf, isEmpty, isLiteral, isObjectDeepPath,
} from './guards';
import type { Literal, Nullable } from './types';

export type MergeDeepObject<ObjA extends Literal, ObjB extends Literal> = {
  [key in Exclude<keyof ObjA, keyof ObjB>]: ObjA[key]
} & {
  [key in Exclude<keyof ObjB, keyof ObjA>]: ObjB[key]
} & {
  [key in Extract<keyof ObjA, keyof ObjB>]: ObjB[key] extends Literal
    ? MergeDeepObject<ObjA[key] extends Literal ? ObjA[key] : ObjB[key], ObjB[key]>
    : ObjB[key]
};

type ToDeepOnlyPathObject<T> = Required<T> extends Literal ? {
  [K in keyof Required<T> as `${K & string}${Required<T>[K] extends Literal ? `.${string & keyof ToDeepOnlyPathObject<Required<T>[K]>}` : ''}`]: never
} : never;

export type DeepObjectPaths<T> = T extends Literal ? keyof ToDeepOnlyPathObject<T> : never;

export type ReplaceObjectValues<
Obj, ToReplace, Replacement> = Obj extends Literal | Partial<Literal>
  ? { [ key in keyof Obj]: ReplaceObjectValues<Obj[key], ToReplace, Replacement> }
  : Obj extends ToReplace
    ? Replacement
    : Obj;

export type DeepObjectValues<T> = T extends Literal | undefined ? {
  [key in keyof T]: T[key] extends Literal | undefined ? DeepObjectValues<T[key]> : T[key]
}[keyof T] : never;

export type PartialDeepObject<Obj> = Obj extends Literal | Nullable<Literal> ? {
  [key in keyof Obj]?: PartialDeepObject<Obj[key]>
} : Obj;

export type ObjectShape<Obj, DefaultValue = unknown> = Obj extends Literal | Partial<Literal> ? {
  [key in keyof Obj]: ObjectShape<Obj[key], DefaultValue>
} : DefaultValue;

export type ObjectComparisonResult<T> = T extends Literal
  ? { [key in keyof T]: ObjectComparisonResult<T[key]> }
  : Change;

export const replaceObjectValues = <Obj extends Literal, ToReplace, Replacement>(
  base: Obj,
  guard: (value: unknown) => value is ToReplace,
  replacer: (value: ToReplace, path: DeepObjectPaths<Obj>) => Replacement,
): ReplaceObjectValues<Obj, ToReplace, Replacement> => {
  const recurse = (obj: Literal, prefix = ''): ReplaceObjectValues<Obj, ToReplace, Replacement> => mapValues(obj, (value, key) => {
    const path = `${prefix}${key}`;

    if (guard(value)) {
      return replacer(value, path as DeepObjectPaths<Obj>);
    }

    if (isLiteral(value)) {
      return recurse(value, `${path}.`);
    }

    return value;
  }) as ReplaceObjectValues<Obj, ToReplace, Replacement>;

  return recurse(base);
};

type PickerFn<Obj> = (objValue: DeepObjectValues<Obj>, path: DeepObjectPaths<Obj>) => boolean;

export const pickDeep = <Obj extends Literal>(
  base: Obj,
  pickerFN: PickerFn<Obj>,
): PartialDeepObject<Obj> => {
  const recurse = (obj: Literal, prefix = '') => Object.entries(obj).reduce<Record<string, unknown>>((acc, [key, value]) => {
    const path = `${prefix}${key}`;

    if (isLiteral(value)) {
      // since PickerFn<Obj> already includes every possible leaf node type
      // this cast doesnt really matter
      const child = recurse(value, `${path}.`);
      if (!isEmpty(child)) {
        acc[key] = child;
      }

      // this one casts the "value" type to the type derrived from every value in this object
    } else if (pickerFN(value as DeepObjectValues<Obj>, path as DeepObjectPaths<Obj>)) {
      acc[key] = value;
    }

    return acc;
  }, {}) as PartialDeepObject<Obj>;

  return recurse(base);
};

export const deepMerge = <T extends Literal, U extends Partial<T>>(
  oldData: T, newData: U,
): T => {
  const recurse = (oldObj: Literal, newObj: Literal): Literal => {
    const plainValues = Object.fromEntries(Object.entries(newObj).filter(([, value]) => !isLiteral(value)));

    return mapValues({
      ...oldObj,
      ...plainValues,
    }, (value, key) => {
      const newValue = newObj[key];

      if (isLiteral(value) && isLiteral(newValue)) {
        return deepMerge(value, newValue);
      }

      return value;
    });
  };

  return recurse(oldData, newData) as T;
};

export const compareObjectValues = <ObjA extends Literal, ObjB extends ObjectShape<ObjA>>(
  previousValue?: ObjA,
  currentValue?: ObjB,
): ObjectComparisonResult<ObjB> => {
  const base = merge(previousValue, currentValue);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return mapValues<ObjB, any>(base, (_, key: keyof ObjA & keyof ObjB) => {
    const previous = isLiteral(previousValue) ? previousValue[key] : previousValue;
    const current = isLiteral(currentValue) ? currentValue[key] : currentValue;

    if (isLiteral(previous) && isLiteral(current)) {
      return compareObjectValues(previous, current as ObjectShape<typeof previous>);
    }

    if (Array.isArray(previous) && Array.isArray(current)) {
      if (previous.length !== current.length) {
        return Change.unknown;
      }

      if (isArrayOf(previous, isLiteral) && isArrayOf(current, isLiteral)) {
        const compared = previous.map((item, index) => compareObjectValues(item, current[index]));
        return compared.every((item) => isEmpty(pickDeep(item as Literal, (value) => value !== Change.none)))
          ? Change.none
          : Change.unknown;
      }

      return previous.every(
        (item, index) => compareValues(castString(current[index]), castString(item)) === Change.none,
      ) ? Change.none : Change.unknown;
    }

    return compareValues<unknown>(castString(previous), castString(current));
  }) as ObjectComparisonResult<ObjB>;
};

export type GetDiffArgs<
InitialDataShape extends Literal, InputShape extends ObjectShape<InitialDataShape>> = Readonly<{
  initialData: InitialDataShape;
  userInput: InputShape;
  omitFields?: (
    fieldName: DeepObjectPaths<InitialDataShape> | DeepObjectPaths<InputShape>) => boolean;
}>;

export const getDiff = <InitialDataShape extends Literal, InputShape extends ObjectShape<InitialDataShape>>({
  omitFields,
  initialData,
  userInput,
}: GetDiffArgs<InitialDataShape, InputShape>): PartialDeepObject<ObjectComparisonResult<InputShape>> => pickDeep(
    compareObjectValues(initialData, userInput),
    (change, path) => {
      if (change === Change.none) {
        return false;
      }

      if (isNil(omitFields)) {
        return true;
      }

      if (isObjectDeepPath(initialData, path) || isObjectDeepPath(userInput, path)) {
        return !omitFields(path);
      }

      return true;
    },
  );
