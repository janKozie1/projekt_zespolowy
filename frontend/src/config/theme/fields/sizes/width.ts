const width = {
  sidebar: '290px',
  calendarCell: '44px',
  discoveryCard: '180px',
  productImage: '616px',
  smallImage: '139px',
  homeImage: '1490px',
} as const;

export type Width = typeof width;

export default width;
