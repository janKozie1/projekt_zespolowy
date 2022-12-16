import type { Colors } from './colors';
import colors from './colors';

const widths = {
  thin: '1px',
  default: '2px',
};

const createBorders = <T extends keyof Colors>(
  width: keyof typeof widths, color: T,
): Record<keyof Colors[T], string> => Object.fromEntries(
    Object.entries(colors[color]).map(([key, colorCode]) => [key, `${widths[width]} solid ${colorCode}`]),
  ) as Record<keyof Colors[T], string>;

const borders = {
  radii: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  widths,
  styles: {
    default: {
      accent: createBorders('default', 'accent'),
      greyscale: createBorders('default', 'greyscale'),
    },
    thin: {
      greyscale: createBorders('thin', 'greyscale'),
    },
  },
} as const;

export type Borders = typeof borders;

export default borders;
