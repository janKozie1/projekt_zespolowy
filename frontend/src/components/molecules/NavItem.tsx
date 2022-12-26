import type { ReactElement } from 'react';

import { isNil } from 'lodash';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowForwardIosOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';

import type { NavItem as NavItemType } from '../../config/navigation';

import Text from '../atoms/Text';

import Icon from './Icon';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme._.colors.greyscale[0]};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme._.colors.greyscale[10]};;
  }
`;

type Props = Readonly<{
  item: NavItemType;
}>;

const NavItem = ({ item }: Props): ReactElement => (
  <Link to={item.url}>
    <Wrapper>
      <Box p={3} pl={8} display="flex" alignItems="center">
        {!isNil(item.icon) && (
          <Box mr={2} display="inline-flex">
            <Icon size="md">
              {item.icon}
            </Icon>
          </Box>
        )}
        <Text type="button" variant="default">{item.title}</Text>
        <Box ml="auto" mr={4}>
          <Icon size="sm">
            <ArrowForwardIosOutlined />
          </Icon>
        </Box>
      </Box>
    </Wrapper>
  </Link>
);

export default NavItem;
