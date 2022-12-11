import type { ReactElement } from 'react';

import styled from 'styled-components';

import Columns from '../atoms/Columns';
import Rows from '../atoms/Rows';

const ImageWrapper = styled.div`
  width: 100%;

  > img {
    object-fit: contain;
    width: 100%;
    height: ${({ theme }) => theme._.sizes.height.productSmallImage};
  }
`;

const MainImageWrapper = styled(ImageWrapper)`
  > img {
    height: ${({ theme }) => theme._.sizes.height.productMainImage};
  }
`;

type Props = Readonly<{
  images: string[];
}>;

const ProductImages = ({ images }: Props): ReactElement => {
  const [mainImage, ...others] = images;

  return (
    <Rows gap={5}>
      <MainImageWrapper>
        <img src={mainImage} alt="present" />
      </MainImageWrapper>
      <Columns gap={5} regular>
        {others.map((image) => (
          <ImageWrapper key={image}>
            <img src={image} alt="present" />
          </ImageWrapper>
        ))}
      </Columns>
    </Rows>
  );
};

export default ProductImages;
