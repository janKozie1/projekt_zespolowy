import type { ReactNode, ReactElement } from 'react';

import styled from 'styled-components';

import colors from '../../config/theme/fields/colors';
import { toSpacing } from '../../config/theme/fields/spacing';

import Text from '../atoms/Text';

import Icon from './Icon';

const variants = {
  default: colors.greyscale[0],
  error: colors.accent.error,
  success: colors.accent.success,
};

type Variant = keyof typeof variants;

const ChipContainer = styled.div<Pick<Props, 'variant'>>`
  border: ${({ theme }) => theme._.borders.styles.thin.greyscale[50]};
  border-radius: ${({ theme }) => theme._.borders.radii.lg};
  background-color: ${({ variant }) => variants[variant]};
  padding: ${toSpacing(1)} ${toSpacing(2)};
  width: max-content;
  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${toSpacing(2)};
  }
`;

type Props = Readonly<{
  icon: ReactNode;
  label: string;
  variant: Variant;
}>;

const Chip = ({ icon, label, variant }: Props): ReactElement => (
  <ChipContainer variant={variant}>
    <Text type="caption" variant="default" inverted={variant === 'error'}>
      <Icon size="lg">{icon}</Icon>
      {label}
    </Text>
  </ChipContainer>
);

export default Chip;
