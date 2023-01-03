import type { ReactElement } from 'react';

import { useNavigate, generatePath } from 'react-router';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ProductRoutes } from '../../config/paths';
import { toSpacing } from '../../config/theme/fields/spacing';

import Columns from '../atoms/Columns';
import Rows from '../atoms/Rows';
import Text from '../atoms/Text';

const CardContainer = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme._.borders.radii.sm};
  box-shadow: ${({ theme }) => theme._.shadows.default};
  padding: ${toSpacing(4)};
  cursor: pointer;

  display: grid;
  grid-template-columns: 2fr 6fr 2.5fr 4fr;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  gap: ${toSpacing(8)};;

  & > *:nth-child(3) {
    border-left: ${({ theme }) => theme._.borders.styles.default.greyscale[50]};
    border-right: ${({ theme }) => theme._.borders.styles.default.greyscale[50]};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme._.sizes.width.productListImage};
  height: ${({ theme }) => theme._.sizes.height.productListImage};

  & > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const ShopCard = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(generatePath(ProductRoutes.PRODUCT, { id: '1' }))}>
      <ImageContainer>
        <img src="https://placekitten.com/512/512" alt="kitten" />
      </ImageContainer>
      <Box display="flex" justifyContent="space-between" flexDirection="column">
        <Rows gap={8}>
          <Text type="heading" variant="h4">Tytuł</Text>
          <Text type="subtitle" variant="default">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,

          </Text>
        </Rows>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box flex="1" width="max-content">
          <Rows gap={2}>
            <Text type="heading" variant="h5">Idealny dla:</Text>
            <Text type="caption" variant="default">Zosia, Tomek</Text>
          </Rows>
        </Box>
        <Box flex="1" width="max-content">
          <Rows gap={2}>
            <Text type="heading" variant="h5">Idealny na:</Text>
            <Text type="caption" variant="default">Walentynki, urodziny</Text>
          </Rows>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Box />
        <Box ml="auto"><Text type="heading" variant="h2">84,99 zł</Text></Box>
        <Box ml="auto" width="max-content">
          <Columns gap={2}>
            <Button variant="contained">Dodaj do koszyka</Button>
          </Columns>
        </Box>
      </Box>
    </CardContainer>
  );
};

export default ShopCard;
