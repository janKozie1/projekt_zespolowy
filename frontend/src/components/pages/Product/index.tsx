import type { ReactElement } from 'react';

import { Add } from '@mui/icons-material';
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
              mainImage="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Gifts-and-Chocolates-PNG-/Red_Gift_PNG_Transparent_Clipart.png?m=1639734178"
            />
            <Box p={8}>
              <Rows gap={8}>
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
                <Box display="flex" justifyContent="center">
                  <Text type="heading" variant="h5">84,95 zł</Text>
                </Box>
                <Box width="100%" display="flex" justifyContent="center">
                  <Box width="max-content">
                    <Columns gap={2}>
                      <Button variant="contained" startIcon={<Add />}>Dodaj do Ulubionych</Button>
                      <Button variant="outlined">Kup Teraz</Button>
                    </Columns>
                  </Box>
                </Box>
              </Rows>
            </Box>
          </ProductLayout>
        </Rows>
      </Tile>
    </Rows>
  </PageContainer>
);

export default Product;
