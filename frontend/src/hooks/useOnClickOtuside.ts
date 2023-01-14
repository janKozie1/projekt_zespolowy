import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';

import isNil from 'lodash/isNil';

import useSelfUpdatingRef from './useSelfUpdatingRef';

type UseOnClickOutsideArgument = Readonly<{
  handler: (event: MouseEvent | TouchEvent) => void;
}>;

type UseOnClickOutsideReturnValue<T extends Element> = Readonly<{
  ref: MutableRefObject<T | null>;
}>;

const useOnClickOutside = <T extends Element>(
  { handler }: UseOnClickOutsideArgument,
): UseOnClickOutsideReturnValue<T> => {
  const nodeRef = useRef<T>(null);
  const handlerRef = useSelfUpdatingRef(handler);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const { target } = event;
      const node = nodeRef.current;

      if (isNil(node)) {
        return;
      }

      if (target instanceof Element && node.contains(target)) {
        return;
      }

      handlerRef.current(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handlerRef]);

  return { ref: nodeRef };
};

export default useOnClickOutside;
