import type { ReactElement } from 'react';

import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  width: ${({ theme }) => theme._.sizes.width.productImage};
  height: ${({ theme }) => theme._.sizes.height.productImage};
  overflow: hidden;
`;

const CardMedia = styled.div`
  height: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    object-fit: cover;
    max-height: 100%;
    width: 100%;
  }
`;

const ProductImage = (): ReactElement => (
  <ProductContainer>
    <CardMedia>
      <img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Gifts-and-Chocolates-PNG-/Red_Gift_PNG_Transparent_Clipart.png?m=1639734178" alt="present" />
    </CardMedia>
  </ProductContainer>
);

export default ProductImage;
