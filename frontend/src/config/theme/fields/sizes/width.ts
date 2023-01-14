const width = {
  sidebar: '290px',
  playButton: '84px',
  calendarCell: '44px',
  productMainImage: '669px',
  productListImage: '200px',
  discoveryCard: '200px',
  drawer: '360px',
} as const;

export type Width = typeof width;

export default width;
