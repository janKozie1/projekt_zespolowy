import type { ReactElement } from 'react';
import { useMemo, useState } from 'react';

import { uniqBy } from 'lodash';
import styled from 'styled-components';

import { ArrowBackIos, ArrowForwardIos, ShoppingBag } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';

import useApiRequest, { emptyArgs } from '../../../hooks/useApiRequest';
import type { Event, GiftReceiver } from '../../../services/api/types/data';
import { toTree } from '../../../utils/array';
import { isEmpty, isNotNil } from '../../../utils/guards';
import type { Nullable } from '../../../utils/types';

import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import Tile from '../../atoms/Tile';
import Icon from '../../molecules/Icon';
import Loading from '../../molecules/Loading';
import PageHeader from '../../molecules/PageHeader';
import { useAPI } from '../../organisms/ApiProvider';
import { useConstantData } from '../../organisms/ConstantDataProvider';
import List from '../../organisms/List';
import ShopCard from '../../organisms/ShopCard';

import MatchTo from './components/molecules/MatchTo';

const StoreLayout = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 689px;
  overflow: hidden;
`;

const giftsPerPage = 30;

const Store = (): ReactElement => {
  const { api } = useAPI();

  const { loggedInUser } = useConstantData();

  const [gifts, { loading: giftsLoading }] = useApiRequest(api.gifts.allGifts, {
    immediateArgs: emptyArgs,
  });

  const [categories, { loading: categoriesLoading }] = useApiRequest(api.gifts.allCategories, {
    immediateArgs: emptyArgs,
  });

  const [categoryMappings] = useApiRequest(api.event.categoryMappings, {
    immediateArgs: emptyArgs,
  });

  const [users] = useApiRequest(api.user.allUsers, {
    immediateArgs: emptyArgs,
  });

  const [events] = useApiRequest(api.event.allUserEvents, {
    immediateArgs: emptyArgs,
  });

  const [page, setPage] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onCategoryClick = (id: string) => {
    setSelectedCategories((prev) => (prev.includes(id)
      ? prev.filter((category) => category !== id)
      : [...prev, id]));
  };

  const onGiftReceiverSelected = (giftReceiver: GiftReceiver) => {
    setSelectedCategories(giftReceiver.preferredCategories);
  };

  const onEventSelected = (event: Event) => {
    const matchingMappings = (categoryMappings?.data ?? [])
      .filter((mapping) => event.categories.includes(mapping.event));

    const giftFor = users?.data
      ?.find((user) => user.id === event.owner)?.giftReceivers
      .find((receiver) => receiver.id === event.giftReceiver)?.preferredCategories ?? [];

    setSelectedCategories([...giftFor, ...matchingMappings.map((mapping) => mapping.gift)]);
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

  const receiversMap = useMemo(() => loggedInUser.giftReceivers
    .reduce<Record<string, Nullable<GiftReceiver[]>>>((acc, curr) => {
    curr.preferredCategories.forEach((cat) => {
      const existing = acc[cat] ?? [];
      existing.push(curr);
      acc[cat] = existing;
    });
    return acc;
  }, {}), [loggedInUser]);

  const eventMap = useMemo(() => (events?.data ?? []).reduce<Record<string, Nullable<Event[]>>>((acc, curr) => {
    curr.categories.forEach((cat) => {
      const giftCategories = categoryMappings?.data?.filter((e) => e.event === cat).map((e) => e.gift) ?? [];

      giftCategories.forEach((giftCat) => {
        const existing = acc[giftCat] ?? [];
        existing.push(curr);
        acc[giftCat] = uniqBy(existing, (e) => e.name);
      });
    });

    return acc;
  }, {}), [events, categoryMappings]);

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
      <Box pt={4}>
        <MatchTo
          onEventSelected={onEventSelected}
          onGiftReceiverSelected={onGiftReceiverSelected}
        />
      </Box>
      <StoreLayout>
        <Box height="max-content" maxHeight="800px" overflow="auto" width="max-content">
          <Box px={4} py={4}>
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
          <Box pb={4} />
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
                        <ShopCard
                          gift={gift}
                          key={gift.id}
                          idealFor={gift.category.flatMap((e) => receiversMap[e]).filter(isNotNil)}
                          idealOn={gift.category.flatMap((e) => eventMap[e]).filter(isNotNil)}
                        />
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
