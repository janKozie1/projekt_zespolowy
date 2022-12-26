import mapValues from 'lodash/mapValues';

import { isLiteral } from './guards';
import type { Literal } from './types';

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
