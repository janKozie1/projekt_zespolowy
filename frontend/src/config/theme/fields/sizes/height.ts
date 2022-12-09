const height = {
  calendarCell: '44px',
  discoveryCard: '275px',
  productImage: '569px',
  smallImage: '110px',
  homeImage: '1040px',
} as const;

export type Height = typeof height;

export default height;
