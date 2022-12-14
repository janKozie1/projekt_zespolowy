import type { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
                    <Text type="heading" variant="h4">Produkt</Text>
                    <Text type="body" variant="default">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                      no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                      At vero eos et accusam et justo duo dolores et ea rebum.
                      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    </Text>
                  </Rows>
                </Rows>
                <Columns gap={8}>
                  <Button>
                    Dodaj do ulubionych
                  </Button>
                  <Button>
                    Kup teraz
                  </Button>
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
