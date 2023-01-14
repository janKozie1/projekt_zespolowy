import type { ReactElement } from 'react';
import { useMemo, useState } from 'react';

import styled from 'styled-components';

import { ArrowBackIos, ArrowForwardIos, ShoppingBag } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';

import useApiRequest, { emptyArgs } from '../../../hooks/useApiRequest';
import { toTree } from '../../../utils/array';
import { isEmpty } from '../../../utils/guards';

import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import Tile from '../../atoms/Tile';
import Icon from '../../molecules/Icon';
import Loading from '../../molecules/Loading';
import PageHeader from '../../molecules/PageHeader';
import { useAPI } from '../../organisms/ApiProvider';
import List from '../../organisms/List';
import ShopCard from '../../organisms/ShopCard';

const StoreLayout = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 749px;
  overflow: hidden;
`;

const giftsPerPage = 30;

const Store = (): ReactElement => {
  const { api } = useAPI();

  const [gifts, { loading: giftsLoading }] = useApiRequest(api.gifts.allGifts, {
    immediateArgs: emptyArgs,
  });

  const [categories, { loading: categoriesLoading }] = useApiRequest(api.gifts.allCategories, {
    immediateArgs: emptyArgs,
  });

  const [page, setPage] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onCategoryClick = (id: string) => {
    setSelectedCategories((prev) => (prev.includes(id)
      ? prev.filter((category) => category !== id)
      : [...prev, id]));
  };

  const filteredGifts = useMemo(() => {
    const g = gifts?.data ?? [];
    return isEmpty(selectedCategories)
      ? g
      : g.filter((gift) => gift.category.some((category) => selectedCategories.includes(category)));
  }, [gifts, selectedCategories]);

  const totalPages = Math.floor(filteredGifts.length / giftsPerPage);

  const categoriesAsTree = useMemo(() => toTree((categories?.data ?? []).map((category) => ({
    id: category.id,
    label: category.name,
    parent: category.parent,
  }))), [categories]);

  return (
    <PageContainer>
      <PageHeader title="Sklep">
        <Box ml="auto" display="flex" alignItems="center">
          <Box mr={4}>
            <Text type="body" variant="default">
              {`Strona: ${page + 1} / ${totalPages + 1}`}
            </Text>
          </Box>
          <IconButton onClick={() => setPage((prev) => Math.max(0, prev - 1))}>
            <Icon size="md">
              <ArrowBackIos />
            </Icon>
          </IconButton>
          <IconButton onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}>
            <Icon size="md">
              <ArrowForwardIos />
            </Icon>
          </IconButton>
        </Box>
      </PageHeader>
      <StoreLayout>
        <Box pl={4} pt={4} height="max-content">
          <Tile>
            {categoriesLoading ? <Loading /> : (
              <List
                items={categoriesAsTree}
                onChange={onCategoryClick}
                selectedItems={selectedCategories}
              />
            )}
          </Tile>
        </Box>
        <Box py={4} display="flex" flexDirection="row" overflow="auto" height="100%">
          <Box px={4} maxHeight="100%" width="100%">
            {giftsLoading
              ? <Loading />
              : (
                <>
                  {isEmpty(filteredGifts) ? (
                    <Box width="100%" height="100%" flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                      <Text type="body" variant="default">Brak produktów</Text>
                      <Box mt={2}>
                        <Icon size="lg">
                          <ShoppingBag />
                        </Icon>
                      </Box>
                    </Box>
                  ) : (
                    <Rows gap={8}>
                      {filteredGifts.slice(page * giftsPerPage, (page + 1) * giftsPerPage).map((gift) => (
                        <ShopCard gift={gift} key={gift.id} />
                      ))}
                    </Rows>
                  )}
                </>
              )}
            <Box pb={4} />
          </Box>
        </Box>
      </StoreLayout>
    </PageContainer>
  );
};

export default Store;
