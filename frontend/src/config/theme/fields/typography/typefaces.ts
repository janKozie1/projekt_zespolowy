const typefaces = {
  default: "'Roboto'",
} as const;

export type Typeface = keyof typeof typefaces;

export default typefaces;
