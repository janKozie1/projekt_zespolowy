import colors from './colors';

const shadows = {
  weak: '1px 1px 3px #bbb',
  strong: '0px 0px 6px black',
  default: '1px 3px 6px #0000004D',
  accent: {
    success: `0px 0px 8px ${colors.accent.success}`,
  },
};

export type Shadows = typeof shadows;

export default shadows;
