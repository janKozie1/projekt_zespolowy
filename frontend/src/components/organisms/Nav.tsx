import { useState } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { Menu } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import styled from 'styled-components';

import type { NavGroup } from '../../config/navigation';
import type { NonMutable } from '../../utils/types';

import Rows from '../atoms/Rows';
import NavItem from '../molecules/NavItem';

type NavContainerProps = Readonly<{
  expanded: boolean;
}>;

const NavSidebarContaier = styled(Box)<NavContainerProps>`
  width: ${({ theme }) => theme._.sizes.width.sidebar};
  box-shadow: ${({ theme }) => theme._.shadows.default};
  height: 100%;
  transition: transform 0.3s;
  position: absolute;
  transform: translateX(calc(-1 * ${({ expanded, theme }) => (expanded ? '0px' : theme._.sizes.width.sidebar)}));
`;

const ChildrenContainer = styled(Box)<NavContainerProps>`
  width: calc(100% - ${({ expanded, theme }) => (expanded ? theme._.sizes.width.sidebar : '0px')});
  transition: transform 0.3s, width 0.3s;
  transform: translateX(${({ expanded, theme }) => (expanded ? theme._.sizes.width.sidebar : '0px')});
`;

type Props = Readonly<{
  navigation: NonMutable<NavGroup[]>;
  children: ReactNode;
}>;

const Nav = ({ navigation, children }: Props): ReactElement => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Box display="flex" flexDirection="column" height="100%" width="100%">
      <Box width="100%" p={5}>
        <IconButton onClick={() => setExpanded((prev) => !prev)}>
          <Menu />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="row" height="100%" width="100%">
        <NavSidebarContaier expanded={expanded} pt={14}>
          {navigation.map((navGroup) => (
            <Rows gap={5} key={navGroup.id}>
              {navGroup.items.map((navItem) => (
                <NavItem key={navItem.id} item={navItem} />
              ))}
            </Rows>
          ))}
        </NavSidebarContaier>
        <ChildrenContainer expanded={expanded}>
          {children}
        </ChildrenContainer>
      </Box>
    </Box>
  );
};

export default Nav;
