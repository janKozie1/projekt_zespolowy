import type {
  MouseEvent, ReactElement, ReactNode,
} from 'react';
import {
  useLayoutEffect, useState,
  useRef,
} from 'react';

import styled, { css } from 'styled-components/macro';

const transformationMatrix = [
  ['0%', '-50%', '-100%'],
  ['-50%', '-50%', '-50%'],
  ['-100%', '-50%', '0%'],
];

const positionVector = ['0%', '50%', '100%'];

export const indexMap = {
  horizontal: {
    position: {
      left: 0,
      center: 1,
      right: 2,
    },
    alignment: {
      inside: 0,
      onEdge: 1,
      outside: 2,
    },
  },
  vertical: {
    position: {
      top: 0,
      center: 1,
      bottom: 2,
    },
    alignment: {
      inside: 0,
      onEdge: 1,
      outside: 2,
    },
  },
};

type Alignment = 'inside' | 'onEdge' | 'outside';

type ContainerProps = Readonly<{
  x?: 'center' | 'left' | 'right';
  y?: 'bottom' | 'center' | 'top';
  alignment?: Alignment;
  xAlignment?: Alignment;
  yAlignment?: Alignment;
  fullWidth?: boolean;
  fullHeight?: boolean;
}>;

const containerPosition = (props: ContainerProps) => {
  const {
    alignment = 'inside',
    x = 'center',
    y = 'center',
    xAlignment = alignment,
    yAlignment = alignment,
  } = props;

  const xIndex = indexMap.horizontal.position[x];
  const yIndex = indexMap.vertical.position[y];
  const xAlignmentIndex = indexMap.horizontal.alignment[xAlignment];
  const yAlignmentIndex = indexMap.vertical.alignment[yAlignment];

  return css`
    left: ${positionVector[xIndex]};
    top: ${positionVector[yIndex]};
    transform:
      translate(
        ${transformationMatrix[xIndex][xAlignmentIndex]},
        ${transformationMatrix[yIndex][yAlignmentIndex]}
      );
  `;
};

const StyledContainer = styled.div`
  display: inline-flex;
  position: absolute;
  height: ${({ fullHeight = false }) => (fullHeight ? '100%' : 'auto')};
  width: ${({ fullWidth = false }) => (fullWidth ? '100%' : 'max-content')};
  ${containerPosition};
  z-index: 1000;
`;

export type Props = ContainerProps & Readonly<{
  children: ReactNode;
  enforcePosition?: boolean;
  stopPropagation?: boolean;
}>;

const FloatingContainer = ({
  x, y, enforcePosition = false, stopPropagation = false, ...props
}: Props): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const [preferredXPosition, setPrefferedXPosition] = useState<Props['x']>();
  const [prefferedYPosition, setPrefferedYPosition] = useState<Props['y']>();

  const onClick = (e: MouseEvent) => {
    if (stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  useLayoutEffect(() => {
    if (enforcePosition) {
      return;
    }

    const boundingBox = ref.current?.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (!boundingBox) {
      return;
    }

    const fitsOnXAxis = windowWidth - boundingBox.width - boundingBox.x >= 0;
    const fitsOnYAxis = windowHeight - boundingBox.height - boundingBox.y >= 0;

    if (!fitsOnXAxis) {
      setPrefferedXPosition(boundingBox.x > windowWidth / 2 ? 'left' : 'right');
    }

    if (!fitsOnYAxis) {
      setPrefferedYPosition(boundingBox.y > windowHeight / 2 ? 'bottom' : 'top');
    }
  }, [enforcePosition]);

  return (
    <StyledContainer
      onClick={onClick}
      {...props}
      x={preferredXPosition ?? x}
      y={prefferedYPosition ?? y}
    />
  );
};

export default FloatingContainer;
