import shadows from './fields/shadows';
import sizes from './fields/sizes';
import typography from './fields/typography';

const theme = {
  typography,
  sizes,
  shadows,
} as const;

export type Theme = typeof theme;

export default theme;
