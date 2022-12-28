export const toMuiSpacing = (value: number): number => value * 4;

export const toSpacing = (value: number): string => `${toMuiSpacing(value)}px`;

export default {};
