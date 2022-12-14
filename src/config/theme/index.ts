import borders from './fields/borders';
import colors from './fields/colors';
import shadows from './fields/shadows';
import sizes from './fields/sizes';
import typography from './fields/typography';

const theme = {
  typography,
  sizes,
  shadows,
  colors,
  borders,
} as const;

export type Theme = typeof theme;

export default theme;
