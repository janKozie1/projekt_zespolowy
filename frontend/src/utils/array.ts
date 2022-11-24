export const append = <Item>(arg: Item) => (arr: Item[]): Item[] => arr.concat([arg]);
export const drop = <Item>(arg: Item) => (arr: Item[]): Item[] => arr
  .filter((item) => item !== arg);
