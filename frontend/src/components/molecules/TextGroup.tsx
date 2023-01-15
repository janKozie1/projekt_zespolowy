import type { ReactElement, ReactNode } from 'react';

import isNil from 'lodash/isNil';
import styled, { css } from 'styled-components/macro';

import { toSpacing } from '../../config/theme/fields/spacing';

type TextGroupContainerProps = Readonly<{
  gap: number;
  hideOverflow: boolean;
  align?: 'left' | 'right';
}>;

const textGroupAlignment = ({ align }: TextGroupContainerProps) => {
  if (isNil(align)) {
    return null;
  }

  if (align === 'right') {
    return css`
      justify-items: end;
    `;
  }

  return css`
    justify-items: start;
  `;
};

const textGroupGap = ({ gap }: TextGroupContainerProps) => css`
  row-gap: ${toSpacing(gap)};
`;

const TextGroupContainer = styled.div<TextGroupContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  ${textGroupGap};
  ${textGroupAlignment};
  ${({ hideOverflow }) => hideOverflow && css`
    > * {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `}
`;

export type Props = Readonly<{
  children: ReactNode;
  hideOverflow?: boolean;
  gap?: number;
  align?: TextGroupContainerProps['align'];
}>;

const TextGroup = ({
  children, hideOverflow = false, gap = 0, align,
}: Props): ReactElement => (
  <TextGroupContainer gap={gap} hideOverflow={hideOverflow} align={align}>
    {children}
  </TextGroupContainer>
);

export default TextGroup;
