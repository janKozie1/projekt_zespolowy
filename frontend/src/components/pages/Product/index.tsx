import type { ReactElement } from 'react';

import Box from '@mui/material/Box';
import styled from 'styled-components';

import { toSpacing } from '../../../config/theme/fields/spacing';

import Columns from '../../atoms/Columns';
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
                'https://img.pikbest.com/png-images/20220312/gift-box-with-ribbons-cartoon-isolated_6291751.png!bwr800',
                'https://img.pikbest.com/png-images/20220312/gift-box-with-ribbons-cartoon-isolated_6291751.png!bwr800',
                'https://img.pikbest.com/png-images/20220312/gift-box-with-ribbons-cartoon-isolated_6291751.png!bwr800',
                'https://img.pikbest.com/png-images/20220312/gift-box-with-ribbons-cartoon-isolated_6291751.png!bwr800',
              ]}
            />
            <Box py={8}>
              <Rows gap={16}>
                <Rows gap={0}>
                  <Rows gap={16}>
                    <Text><h1>Title</h1></Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Text>
                  </Rows>
                  <Rows gap={2}>
                    <Text>
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Text>
                  </Rows>
                  <Rows gap={8}>
                    <Text>
                      It is a long established fact that a reader will be distracted by the readable content
                    </Text>
                    <Text>
                      packages and web page editors now use Lorem Ipsum as their
                    </Text>
                  </Rows>
                </Rows>
                <Columns gap={8}>
                  <Text>#ŚWIĘTA</Text>
                  <Text>#OZDOBNE</Text>
                </Columns>
              </Rows>
            </Box>
          </ProductLayout>
        </Rows>
      </Tile>
    </Rows>
  </PageContainer>
);

export default Product;
