const width = {
  sidebar: '290px',
  calendarCell: '44px',
  discoveryCard: '180px',
} as const;

export type Width = typeof width;

export default width;