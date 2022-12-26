import { useEffect, useRef } from 'react';

import type { Nullable } from '../utils/types';

import useSelfUpdatingRef from './useSelfUpdatingRef';

type UseOnEscArg = Readonly<{
  onEsc: (e: KeyboardEvent) => void;
  node?: Nullable<HTMLElement>;
}>;

const useOnEsc = ({
  onEsc,
  node,
}: UseOnEscArg): void => {
  const nodeRef = useRef(node ?? document.body);

  const onEscRef = useSelfUpdatingRef(onEsc);

  useEffect(() => {
    const cb = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscRef.current(e);
      }
    };

    const targetNode = nodeRef.current;

    targetNode.addEventListener('keydown', cb);
    return () => targetNode.removeEventListener('keydown', cb);
  }, [nodeRef, onEscRef]);
};

export default useOnEsc;
