import has from 'lodash/has';
import isNil from 'lodash/isNil';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

import type { DeepObjectPaths } from './object';
import type { Literal } from './types';

export const isNotNil = <T>(arg: T | null | undefined): arg is T => !isNil(arg);

export const isLiteral = <T>(
  arg: unknown,
): arg is (T extends Literal ? T : Literal) => isPlainObject(arg);

export function isEmpty(arg: string | null | undefined): arg is '' | null | undefined;
export function isEmpty<T>(arg: T | null | undefined): arg is null | undefined;
export function isEmpty<T>(arg: T): boolean {
  if (arg === null || arg === undefined) {
    return true;
  }

  if (isString(arg) && arg.trim() === '') {
    return true;
  }

  if (isLiteral(arg) && Object.keys(arg).length === 0) {
    return true;
  }

  if (Array.isArray(arg) && arg.length === 0) {
    return true;
  }

  return false;
}

export const isObjectDeepPath = <T extends Literal>(
  obj: T,
  path: number | string,
): path is DeepObjectPaths<T> => has(obj, path);

export const isArrayOf = <T>(
  arg: unknown,
  guard: (item: unknown) => item is T,
): arg is T[] => Array.isArray(arg) && arg.every(guard);
