import { isFunction, isNil } from 'lodash';

import type { LocalStorageShape } from './types';

export const getter = <T extends keyof LocalStorageShape>(
  key: T, defaultValue?: LocalStorageShape[T],
): LocalStorageShape[T] => {
  const value = localStorage.getItem(key);

  if (isNil(value)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return defaultValue!;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return JSON.parse(value);
};

export const setter = <T extends keyof LocalStorageShape>(
  key: T, value: LocalStorageShape[T] | ((prev?: LocalStorageShape[T]) => LocalStorageShape[T]),
): void => {
  const newValue = isFunction(value) ? value(getter(key)) : value;
  localStorage.setItem(key, JSON.stringify(newValue));
};
