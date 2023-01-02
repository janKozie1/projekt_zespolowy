export type ObjectValues<T> = T[keyof T];

export type Nullable<T> = T | null | undefined;

export type Literal = Record<string, unknown>;

export type NonMutable<T> = T extends (infer Item)[] ? (Item[] | readonly Item[]) : T;

export type DeepObjectValues<T> = T extends Literal | undefined ? {
  [key in keyof T]: T[key] extends Literal | undefined ? DeepObjectValues<T[key]> : T[key]
}[keyof T] : never;
