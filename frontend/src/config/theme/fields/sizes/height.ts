const height = {
  calendarCell: '44px',
  discoveryCard: '275px',
  productMainImage: '520px',
  productSmallImage: '150px',
} as const;

export type Height = typeof height;

export default height;
