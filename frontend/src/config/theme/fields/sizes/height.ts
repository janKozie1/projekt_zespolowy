const height = {
  calendarCell: '44px',
  discoveryCard: '307px',
  playButton: '84px',
  productMainImage: '520px',
  productSmallImage: '150px',
} as const;

export type Height = typeof height;

export default height;
