import type { ReactElement } from 'react';

import styled from 'styled-components';

import Rows from '../atoms/Rows';

const ImageWrapper = styled.div`
  width: 100%;

  > img {
    object-fit: contain;
    width: 100%;
  }
`;

const MainImageWrapper = styled(ImageWrapper)`
  > img {
    height: ${({ theme }) => theme._.sizes.height.productMainImage};
    width: ${({ theme }) => theme._.sizes.width.productMainImage};
  }
`;

type Props = Readonly<{
  mainImage: string;
}>;

const ProductImages = ({ mainImage }: Props): ReactElement => (
  <Rows gap={5}>
    <MainImageWrapper>
      <img src={mainImage} alt="present" />
    </MainImageWrapper>
  </Rows>
);

export default ProductImages;
