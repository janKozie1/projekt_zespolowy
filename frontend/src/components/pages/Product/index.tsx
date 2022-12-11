import type { ReactElement } from 'react';

import styled from 'styled-components';

import Columns from '../../atoms/Columns';
import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Tile from '../../atoms/Tile';
import PageHeader from '../../molecules/PageHeader';
import ProductDesc from '../../organisms/ProductDesc';
import ProductImage from '../../organisms/ProductImage';
import SmallImage from '../../organisms/SmallImage';

const ProductLayout = styled.div`
  display: flex;
  flex-direction:row;
  height: 100%;
  width: 100%;

`;

const Product = (): ReactElement => (
  <PageContainer>
    <Rows gap={8}>
      <PageHeader title="Product > Super Product" />
      <ProductLayout>
        <Tile width="100%">
          <Rows gap={4}>
            <Columns gap={20}>
              <ProductImage />
              <ProductDesc />
            </Columns>
          </Rows>
          <Rows gap={20}>
            <Columns gap={5}>
              <SmallImage />
              <SmallImage />
              <SmallImage />
              <SmallImage />
            </Columns>
          </Rows>
        </Tile>
      </ProductLayout>
    </Rows>
  </PageContainer>
);

export default Product;
