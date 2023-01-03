const colors = {
  greyscale: {
    0: '#fff',
    10: '#F8F8F8',
    30: '#d1d1d1',
    50: '#BBBBBB',
    90: '#303030',
    100: '#000',
  },
  green: {
    0: '#5ec31b',
  },
  accent: {
    primary: '#BCAAA4',
    secondary: '#BCE0FD',
    error: '#FF6868',
    success: '#81F689',
  },
  avatars: [
    '#513DB6',
    '#349B9B',
    '#CF2670',
    '#678CD8',
    '#BA4E00',
    '#36A236',
    '#E46565',
    '#F1C119',
  ],
} as const;

export type Colors = typeof colors;

export default colors;
