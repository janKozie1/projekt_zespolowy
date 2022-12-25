import { useEffect, useRef, useState } from 'react';
import type {
  MouseEvent as MouseEv, ReactElement, ReactNode,
} from 'react';

import styled from 'styled-components/macro';

import { Close } from '@mui/icons-material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { toSpacing } from '../../config/theme/fields/spacing';
import { useDrawers } from '../../hooks/useDrawers';

import Rows from '../atoms/Rows';
import Text from '../atoms/Text';

import Icon from './Icon';

export type MouseEventHandler<T extends HTMLElement> = MouseEv<T>;

const Container = styled.div`
  overflow-y: auto;
`;

const StyledDrawer = styled(MuiDrawer)`
  position: relative;
  width: max-content;

  .MuiPaper-root > div > .MuiBox-root > .MuiBox-root {
    background: ${({ theme }) => theme._.colors.greyscale[10]};
    border-radius: ${({ theme }) => theme._.borders.radii.md};
    box-shadow: ${({ theme }) => theme._.shadows.default};
    display: flex;
    flex-direction: column;
    margin: 0;
    min-height: calc(100vh - 2 * ${toSpacing(6)});
    overflow-x: hidden;
    width: ${({ theme }) => theme._.sizes.width.drawer};
  }

  .MuiPaper-root {
    overflow: visible;
  }
`;

type Props = Readonly<{
  open: boolean;
  children: ReactNode;
  header: string;
}>;

const Drawer = ({
  header,
  open = false,
  children,
}: Props): ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [internalOpenState, setInternalOpenState] = useState(false);

  const { close } = useDrawers();

  useEffect(() => {
    setInternalOpenState(true);
  }, []);

  const visible = open && internalOpenState;

  return (
    <StyledDrawer
      anchor="right"
      open={visible}
      ref={modalRef}
    >
      <Container>
        <Box p={6}>
          <Box p={6}>
            <Box mb={12} display="flex" justifyContent="space-between">
              <Rows gap={1}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Text type="heading" variant="h5">{header}</Text>
                  <IconButton onClick={close}>
                    <Icon size="lg">
                      <Close />
                    </Icon>
                  </IconButton>
                </Box>
              </Rows>
            </Box>
            {children}
          </Box>
        </Box>
      </Container>
    </StyledDrawer>
  );
};

export default Drawer;
