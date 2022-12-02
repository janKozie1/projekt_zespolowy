import {
  typefaces,
} from './typography';

const theme = {
  typefaces,
} as const;

export type Theme = typeof theme;

export default theme;
