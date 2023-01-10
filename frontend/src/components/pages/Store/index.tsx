import type { ReactElement } from 'react';

import isNil from 'lodash/isNil';

import Box from '@mui/material/Box';

import useApiRequest, { emptyArgs } from '../../../hooks/useApiRequest';

import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Loading from '../../molecules/Loading';
import PageHeader from '../../molecules/PageHeader';
import { useAPI } from '../../organisms/ApiProvider';
import ShopCard from '../../organisms/ShopCard';

const Store = (): ReactElement => {
  const { api } = useAPI();

  const [gifts, { loading }] = useApiRequest(api.gifts.allGifts, {
    immediateArgs: emptyArgs,
  });

  return (
    <PageContainer>
      <PageHeader title="Sklep" />
      <Box mt={8}>
        <Rows gap={8}>
          {isNil(gifts) || loading ? <Loading /> : gifts.data?.map((gift) => (
            <ShopCard gift={gift} key={gift.id} />
          ))}
        </Rows>
      </Box>
    </PageContainer>
  );
};

export default Store;
