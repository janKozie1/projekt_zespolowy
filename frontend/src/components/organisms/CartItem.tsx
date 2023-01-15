import type { ReactElement, ReactNode } from 'react';

import { isNil } from 'lodash';
import { useNavigate, generatePath } from 'react-router';
import styled from 'styled-components';

import { CancelOutlined, ArrowForwardOutlined } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

import { ProductRoutes } from '../../config/paths';
import type { Gift } from '../../services/api/types/data';
import { trimToLength } from '../../utils/string';

import Columns from '../atoms/Columns';
import Text from '../atoms/Text';

const ImageContainer = styled.div`
  height: 100px;

  & > img {
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme._.borders.radii.sm};
  }
`;

const ItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  display: grid;
  grid-template-columns: 7fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
`;

type Props = Readonly<{
  gift: Gift;
  children?: ReactNode;
  onRemove?: (gift: Gift) => void;
}>;

const CartItem = ({ gift, onRemove, children }: Props): ReactElement => {
  const navigate = useNavigate();

  return (
    <ItemContainer>
      <Box display="flex" alignItems="center">
        <ImageContainer>
          <img src={gift.imageURL} alt={gift.name} />
        </ImageContainer>
        <Box maxWidth="50%" ml={6} display="flex" flexDirection="column" gap={6}>
          <Text type="body" variant="default">
            {`${gift.name} - ${gift.price} zł`}
          </Text>
          <Text type="caption" variant="default">
            {trimToLength(gift.description, 200)}
          </Text>
        </Box>
      </Box>
      {children}
      <Box ml="auto">
        <Columns gap={2}>
          {!isNil(onRemove) && (
            <IconButton
              aria-label="delete"
              onClick={() => onRemove(gift)}
              color="error"
            >
              <CancelOutlined />
            </IconButton>
          )}
          <IconButton
            onClick={() => navigate(generatePath(ProductRoutes.PRODUCT, {
              id: gift.id,
            }))}
          >
            <ArrowForwardOutlined />
          </IconButton>
        </Columns>
      </Box>
    </ItemContainer>
  );
};

export default CartItem;
