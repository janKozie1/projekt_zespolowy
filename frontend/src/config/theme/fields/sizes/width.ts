const width = {
  sidebar: '290px',
  playButton: '84px',
  calendarCell: '44px',
  productMainImage: '669px',
  productListImage: '256px',
  discoveryCard: '180px',
} as const;

export type Width = typeof width;

export default width;
