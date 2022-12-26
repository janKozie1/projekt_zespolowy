import type { Height } from './height';
import height from './height';
import type { Width } from './width';
import width from './width';

const sizes = {
  width,
  height,
} as const;

export type {
  Width,
  Height,
};

export default sizes;
