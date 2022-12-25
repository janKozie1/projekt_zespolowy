import type { MouseEvent } from 'react';

export type FNShape<Args extends unknown[], Output> = (...args: Args) => Output;

export const makeDelayed = <Args extends unknown[], Output>(
  fn: FNShape<Args, Output>, maxDelay: number,
): FNShape<Args, Promise<Output>> => async (...args) => new Promise((resolve) => {
    setTimeout(() => resolve(fn(...args)), Math.random() * maxDelay);
  });

export const withStopPropagation = (
  fn?: () => void,
) => <ElementType extends HTMLElement>(e: MouseEvent<ElementType>): void => {
  e.stopPropagation();
  fn?.();
};

export default {};
