import { useState } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { Menu, ShoppingCartOutlined } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

import type { NavGroup } from '../../config/navigation';
import { CartRoutes } from '../../config/paths';
import { toSpacing } from '../../config/theme/fields/spacing';
import type { NonMutable } from '../../utils/types';

import Rows from '../atoms/Rows';
import Icon from '../molecules/Icon';
import NavItem from '../molecules/NavItem';

type NavContainerProps = Readonly<{
  expanded: boolean;
}>;

const NavSidebarContaier = styled.div<NavContainerProps>`
  width: ${({ theme }) => theme._.sizes.width.sidebar};
  box-shadow: ${({ theme }) => theme._.shadows.default};
  height: 100%;
  transition: transform 0.3s;
  position: absolute;
  transform: translateX(calc(-1 * ${({ expanded, theme }) => (expanded ? '0px' : theme._.sizes.width.sidebar)}));
  padding: ${toSpacing(14)} 0;
  z-index: 2;
`;

const NavHeaderContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme._.colors.accent.primary};
  box-shadow: ${({ theme }) => theme._.shadows.strong};
  padding: ${toSpacing(5)};
  position: relative;
  z-index: 3;
`;

const ChildrenContainer = styled.div<NavContainerProps>`
  width: calc(100% - ${({ expanded, theme }) => (expanded ? theme._.sizes.width.sidebar : '0px')});
  transition: transform 0.3s, width 0.3s;
  transform: translateX(${({ expanded, theme }) => (expanded ? theme._.sizes.width.sidebar : '0px')});
  position: relative;
  z-index: 1;
`;

type Props = Readonly<{
  navigation: NonMutable<NavGroup[]>;
  authNav: NonMutable<NavGroup['items']>;
  children: ReactNode;
}>;

const Nav = ({ navigation, authNav, children }: Props): ReactElement => {
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(true);

  return (
    <Box display="flex" flexDirection="column" height="100%" width="100%">
      <NavHeaderContainer>
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <IconButton onClick={() => setExpanded((prev) => !prev)}>
            <Icon size="lg">
              <Menu />
            </Icon>
          </IconButton>
          <IconButton onClick={() => navigate(CartRoutes.CART)}>
            <Icon size="lg">
              <ShoppingCartOutlined />
            </Icon>
          </IconButton>
        </Box>
      </NavHeaderContainer>
      <Box display="flex" flexDirection="row" width="100%" flexGrow="1" overflow="hidden" position="relative">
        <NavSidebarContaier expanded={expanded}>
          <Box display="flex" flexDirection="column" height="100%" flexGrow="1" position="relative" justifyContent="space-between">
            {navigation.map((navGroup) => (
              <Rows gap={5} key={navGroup.id}>
                {navGroup.items.map((navItem) => (
                  <NavItem key={navItem.id} item={navItem} />
                ))}
              </Rows>
            ))}
            <Box>
              <Rows gap={5}>
                {authNav.map((navItem) => (
                  <NavItem key={navItem.id} item={navItem} />
                ))}
              </Rows>
            </Box>
          </Box>
        </NavSidebarContaier>
        <ChildrenContainer expanded={expanded}>
          {children}
        </ChildrenContainer>
      </Box>
    </Box>
  );
};

export default Nav;
