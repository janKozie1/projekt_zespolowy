const colors = {
  greyscale: {
    0: '#fff',
    10: '#F8F8F8',
    50: '#BBBBBB',
    90: '#303030',
    100: '#000',
  },
  accent: {
    primary: '#BCAAA4',
    secondary: '#BCE0FD',
    error: '#FF6868',
    success: '#81F689',
  },
} as const;

export type Colors = typeof colors;

export default colors;
