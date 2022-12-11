import type { ReactNode, ReactElement } from 'react';

import Icon from '@mui/material/Icon';
import styled from 'styled-components';

import { toSpacing } from '../../config/theme/fields/spacing';

const ChipContainer = styled.div`
  border: ${({ theme }) => theme._.borders.styles.thin.black[100]};
  border-radius: ${({ theme }) => theme._.borders.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toSpacing(2)};
  padding: ${toSpacing(1)} ${toSpacing(2)};
  width: max-content;
`;

type Props = Readonly<{
  icon: ReactNode;
  label: ReactNode;
}>;

const Chip = ({ icon, label }: Props): ReactElement => (
  <ChipContainer>
    <Icon>
      {icon}
    </Icon>
    {label}
  </ChipContainer>
);

export default Chip;
