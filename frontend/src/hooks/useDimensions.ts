import { useRef, useState, useMemo } from 'react';

import debounce from 'lodash/debounce';

type Dimensions = Readonly<{
  height?: number;
  width?: number;
}>;

type UseDimensionsReturnValue<T extends HTMLElement> = [(node: T | null) => void, Dimensions];

const useDimensions = <T extends HTMLElement>(): UseDimensionsReturnValue<T> => {
  const [dimensions, setDimenions] = useState<Partial<Dimensions>>({});
  const innerRef = useRef<T>();

  const resizeObserver = useMemo<ResizeObserver>(() => new ResizeObserver(
    debounce<ResizeObserverCallback>((entries) => {
      entries.forEach((entry) => {
        if (entry.target !== innerRef.current) {
          return;
        }

        const { height, width } = entry.target.getBoundingClientRect();

        setDimenions((prev) => {
          if (height === prev.height && width === prev.width) {
            return prev;
          }

          return { height, width };
        });
      });
    }, 200),
  ), []);

  const callbackRef = useMemo(() => (node: T | null) => {
    const currentNode = innerRef.current;

    if (node === currentNode) {
      return;
    }

    if (currentNode) {
      resizeObserver.unobserve(currentNode);
    }

    innerRef.current = node ?? undefined;

    if (node) {
      resizeObserver.observe(node, { box: 'border-box' });
    }
  }, [resizeObserver]);

  return [callbackRef, dimensions];
};

export default useDimensions;
