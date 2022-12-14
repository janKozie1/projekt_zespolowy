import type { ReactNode, ReactElement } from 'react';

import styled from 'styled-components';

import { toSpacing } from '../../config/theme/fields/spacing';

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme._.colors.greyscale[10]};
`;

const InnerContainer = styled.div`
  height: max-content;
  width: 100%;
  padding: ${toSpacing(10)} ${toSpacing(20)};
`;

type Props = Readonly<{
  children: ReactNode;
}>;

const PageContainer = ({ children }: Props): ReactElement => (
  <OuterContainer>
    <InnerContainer>
      {children}
    </InnerContainer>
  </OuterContainer>
);

export default PageContainer;
