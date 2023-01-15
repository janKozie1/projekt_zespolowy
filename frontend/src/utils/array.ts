import { isNil, partition } from 'lodash';

import { isEmpty } from './guards';
import type { Nullable } from './types';

export const append = <Item>(arg: Item) => (arr: Item[]): Item[] => arr.concat([arg]);
export const drop = <Item>(arg: Item) => (arr: Item[]): Item[] => arr
  .filter((item) => item !== arg);

type TreeNode = Readonly<{
  id: string;
  parent: Nullable<string>;
}>;

type Tree<T extends TreeNode> = Omit<TreeNode, 'parent'> & Readonly<{
  parent: Nullable<Tree<T>>;
  children: Tree<T>[];
}> & T;

export const toTree = <T extends TreeNode>(items: T[]): Tree<T>[] => {
  if (isEmpty(items)) {
    return [];
  }

  const [roots, nodes] = partition(items, (item) => isNil(item.parent));

  const rootMap = new Map(roots.map((root) => [root.id, {
    ...root,
    id: root.id,
    parent: null,
    children: [] as Tree<T>[],
  }]));

  nodes.forEach((node) => {
    const parent = rootMap.get(node.parent ?? '');

    if (isNil(parent)) {
      return;
    }

    const treeNode = {
      ...node,
      children: [],
      id: node.id,
      parent,
    };

    parent.children.push(treeNode);
  });

  return [...rootMap.values()];
};

export const getNRandomIndices = (arr: unknown[], amount: number, exclude: number[] = []): number[] => {
  if (amount === 0) {
    return [];
  }

  if (amount >= arr.length) {
    return Array.from({ length: arr.length }, (_, i) => i);
  }

  const randomIndex = Math.floor(Math.random() * arr.length);

  if (exclude.includes(randomIndex)) {
    return getNRandomIndices(arr, amount, exclude);
  }

  return [randomIndex, ...getNRandomIndices(arr, amount - 1, [randomIndex, ...exclude])];
};
