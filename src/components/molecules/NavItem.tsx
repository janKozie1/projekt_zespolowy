import type { ReactElement } from 'react';

import { Box, Icon } from '@mui/material';
import { isNil } from 'lodash';
import { Link } from 'react-router-dom';

import type { NavItem as NavItemType } from '../../config/navigation';

import Text from '../atoms/Text';

type Props = Readonly<{
  item: NavItemType;
}>;

const NavItem = ({ item }: Props): ReactElement => (
  <Link to={item.url}>
    <Box p={3} pl={8} display="flex" alignItems="center">
      {!isNil(item.icon) && (
        <Box mr={2} display="inline-flex">
          <Icon>
            {item.icon}
          </Icon>
        </Box>
      )}
      <Text>{item.title}</Text>
    </Box>
  </Link>
);

export default NavItem;
