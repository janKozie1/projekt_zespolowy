import {
  isArray, isFunction, isNil, isString,
} from 'lodash';

import { isLiteral } from '../../../utils/guards';
import { replaceObjectValues } from '../../../utils/object';

import defaults from './data';
import type { LocalStorageShape } from './types';

const isDateString = (arg: unknown): arg is string => isString(arg) && arg.includes('T') && /\d{4}-\d{2}-\d{2}/i.test(arg.split('T')[0]);

const withParseDates = (arg: unknown): unknown => {
  if (isDateString(arg)) {
    return new Date(arg);
  }

  if (isLiteral(arg)) {
    return replaceObjectValues(arg, isDateString, (value) => new Date(value));
  }

  if (isArray(arg)) {
    return arg.map((item) => withParseDates(item));
  }

  return arg;
};

export const getter = <T extends keyof LocalStorageShape>(
  key: T,
): LocalStorageShape[T] => {
  const value = localStorage.getItem(key);

  if (isNil(value)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const defaultValue = defaults[key];
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return withParseDates(JSON.parse(value)) as LocalStorageShape[T];
};

export const setter = <T extends keyof LocalStorageShape>(
  key: T, value: LocalStorageShape[T] | ((prev?: LocalStorageShape[T]) => LocalStorageShape[T]),
): void => {
  const newValue = isFunction(value) ? value(getter(key)) : value;
  localStorage.setItem(key, JSON.stringify(newValue));
};
