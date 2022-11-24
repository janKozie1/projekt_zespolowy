const sizes = {
  100: '1rem',
  200: '1.2rem',
  300: '1.4rem',
  400: '1.6rem',
  500: '1.8rem',
  600: '2.4rem',
  700: '3.2rem',
} as const;

export const htmlFontScale = 0.625;

export const htmlFontSize = 16 * htmlFontScale;

export const letterSpacing = '0.02rem';

export type Size = keyof typeof sizes;

export default sizes;
