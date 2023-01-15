import type { ReactElement } from 'react';

import { generatePath, useNavigate } from 'react-router';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ProductRoutes } from '../../config/paths';
import type { Gift } from '../../services/api/types/data';
import { trimToLength } from '../../utils/string';

import Text from '../atoms/Text';
import TextGroup from '../molecules/TextGroup';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme._.sizes.width.discoveryCard};
  height: ${({ theme }) => theme._.sizes.height.discoveryCard};
  overflow: hidden;
  border-radius: ${({ theme }) => theme._.borders.radii.sm};
  box-shadow: ${({ theme }) => theme._.shadows.default};
`;

const CardMedia = styled.div`
  height: 42%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    object-fit: cover;
    max-height: 100%;
    width: 100%;
  }
`;

type Props = Readonly<{
  gift: Gift;
}>;

const DiscoveryCard = ({ gift }: Props): ReactElement => {
  const navigate = useNavigate();
  return (
    <CardContainer>
      <CardMedia>
        <img src={gift.imageURL} alt={gift.name} />
      </CardMedia>
      <Box p={4} display="flex" justifyContent="space-between" flexDirection="column" flexGrow="1">
        <TextGroup gap={2} hideOverflow>
          <Text type="body" variant="default">{gift.name}</Text>
        </TextGroup>
        <Box mt={2}>
          <Text type="caption" variant="default">{trimToLength(gift.description, 100)}</Text>
        </Box>
        <Box ml="auto" mt="auto">
          <Button
            variant="contained"
            onClick={() => navigate(generatePath(ProductRoutes.PRODUCT, {
              id: gift.id,
            }))}
          >
            Zobacz więcej
          </Button>
        </Box>
      </Box>
    </CardContainer>
  );
};

export default DiscoveryCard;
