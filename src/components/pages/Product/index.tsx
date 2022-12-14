import type { ReactElement } from 'react';

import { Add } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';

import { toSpacing } from '../../../config/theme/fields/spacing';

import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import Tile from '../../atoms/Tile';
import PageHeader from '../../molecules/PageHeader';
import ProductImages from '../../organisms/ProductImages';

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 8fr 10fr;
  grid-auto-flow: column;
  gap: ${toSpacing(15)};
`;

const ButtonFavourite = styled.div`
  background-color:#D7CCC8;
  border-radius: ${toSpacing(0.5)};
  margin:${toSpacing(2)};
  border: 1px solid #B8B8B8;
  border-radius: 4px;
`;

const ButtonBuy = styled.div`
  background-color:#ffffff;
  border-radius: ${toSpacing(0.5)};
  margin:${toSpacing(2)};
  border: 1px solid #B8B8B8;
  border-radius: 4px;
`;

const StyledButton = styled(Button)`
  color: #303030;
  height:${toSpacing(10)};
  font-size:14px;
`;

const ButtonLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
`;

const Product = (): ReactElement => (
  <PageContainer>
    <Rows gap={8}>
      <PageHeader title="Product > Super Product" />
      <Tile width="100%">
        <Rows gap={4}>
          <ProductLayout>
            <ProductImages
              images={[
                'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Gifts-and-Chocolates-PNG-/Red_Gift_PNG_Transparent_Clipart.png?m=1639734178',
              ]}
            />
            <Box p={8}>
              <Rows gap={8}>
                <Rows gap={16}>
                  <Text><h1 style={{ fontSize: '90px' }}>Title</h1></Text>
                  <Text>
                    <p style={{ fontSize: '16px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    </p>
                  </Text>
                </Rows>
                <Text><h2 style={{ textAlign: 'center', fontSize: '60px' }}>84,49zł</h2></Text>
                <ButtonLayout>
                  <ButtonFavourite>
                    <StyledButton startIcon={<Add />}>Dodaj do Ulubionych</StyledButton>
                  </ButtonFavourite>
                  <ButtonBuy>
                    <StyledButton>Kup Teraz</StyledButton>
                  </ButtonBuy>
                </ButtonLayout>
              </Rows>
            </Box>
          </ProductLayout>
        </Rows>
      </Tile>
    </Rows>
  </PageContainer>
);

export default Product;
