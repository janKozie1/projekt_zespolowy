const typefaces = {
  default: "'Arial'",
} as const;

export type Typeface = keyof typeof typefaces;

export default typefaces;
