import type { ReactElement } from 'react';

import { isNil } from 'lodash';
import styled from 'styled-components';

import { Add } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { toSpacing } from '../../../config/theme/fields/spacing';
import useApiRequest from '../../../hooks/useApiRequest';

import Columns from '../../atoms/Columns';
import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import Tile from '../../atoms/Tile';
import Loading from '../../molecules/Loading';
import PageHeader from '../../molecules/PageHeader';
import { useAPI } from '../../organisms/ApiProvider';
import ProductImages from '../../organisms/ProductImages';

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 8fr 10fr;
  grid-auto-flow: column;
  gap: ${toSpacing(15)};
`;

type Props = Readonly<{
  id: string;
}>;

const Product = ({ id }: Props): ReactElement => {
  const { api, refreshQueries } = useAPI();

  const addToCart = async () => {
    await api.cart.temporaryCart.addGift({ id });
    refreshQueries([api.auth.loggedInUser]);
  };

  const [product, { loading }] = useApiRequest(api.gifts.gift, {
    immediateArgs: [{ id }],
  });

  return (
    <PageContainer>
      <Rows gap={8}>
        <PageHeader title="Prezent" />
        <Tile width="100%">
          {isNil(product) || loading ? <Loading /> : (
            <>
              {isNil(product.data) ? 'Nie znaleziono takiego produktu' : (
                <Rows gap={4}>
                  <ProductLayout>
                    <ProductImages
                      mainImage={product.data.imageURL}
                    />
                    <Box p={8}>
                      <Rows gap={8}>
                        <Rows gap={16}>
                          <Text type="heading" variant="h4">{product.data.name}</Text>
                          <Text type="body" variant="default">
                            {product.data.description}
                          </Text>
                        </Rows>
                        <Box display="flex" justifyContent="center">
                          <Text type="heading" variant="h5">
                            {`${product.data.price} zł`}
                          </Text>
                        </Box>
                        <Box width="100%" display="flex" justifyContent="center">
                          <Box width="max-content">
                            <Columns gap={2}>
                              <Button variant="contained" onClick={addToCart} startIcon={<Add />}>Dodaj do Koszyka</Button>
                            </Columns>
                          </Box>
                        </Box>
                      </Rows>
                    </Box>
                  </ProductLayout>
                </Rows>
              )}
            </>
          )}
        </Tile>
      </Rows>
    </PageContainer>
  );
};

export default Product;
