import type { ReactElement } from 'react';

import styled from 'styled-components';

import { toSpacing } from '../../config/theme/fields/spacing';

const ProductContainer = styled.div`
  width: ${({ theme }) => theme._.sizes.width.smallImage};
  height: ${({ theme }) => theme._.sizes.height.smallImage};
  overflow: hidden;
  margin-top:${toSpacing(5)};
`;

const CardMedia = styled.div`
  height: 100%;
  object-fit: cover;

  > img {
    object-fit: cover;
    max-height: 100%;
    width: 100%;
  }
`;

const ProductImage = (): ReactElement => (
  <ProductContainer>
    <CardMedia>
      <img src="https://img.pikbest.com/png-images/20220312/gift-box-with-ribbons-cartoon-isolated_6291751.png!bwr800" alt="smallpresent" />
    </CardMedia>
  </ProductContainer>
);

export default ProductImage;
