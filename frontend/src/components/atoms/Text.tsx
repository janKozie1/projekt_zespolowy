import type { ReactNode, ReactElement } from 'react';

import styled from 'styled-components';

import colors from '../../config/theme/fields/colors';
import sizes from '../../config/theme/fields/typography/sizes';

const types = {
  heading: {
    h4: {
      size: sizes[700],
      weight: 'normal',
      color: colors.greyscale[100],
      textTransform: 'none',
    },
    h5: {
      size: sizes[600],
      weight: 'bold',
      color: colors.greyscale[90],
      textTransform: 'none',
    },
  },
  subtitle: {
    default: {
      size: sizes[400],
      weight: 'normal',
      color: colors.greyscale[90],
      textTransform: 'none',
    },
  },
  body: {
    default: {
      size: sizes[400],
      weight: 'normal',
      color: colors.greyscale[100],
      textTransform: 'none',
    },
  },
  button: {
    default: {
      size: sizes[400],
      weight: 'normal',
      color: colors.greyscale[90],
      textTransform: 'uppercase',
    },
  },
  caption: {
    default: {
      size: sizes[200],
      weight: 'normal',
      color: colors.greyscale[90],
      textTransform: 'none',
    },
  },
  overline: {
    default: {
      size: sizes[100],
      weight: 'normal',
      color: colors.greyscale[100],
      textTransform: 'none',
    },
  },
} as const;

type TextTypes = typeof types;
type TextType = keyof TextTypes;

type VariantConfig = Readonly<{
  size: string;
  weight: string;
  color: string;
  textTransform: string;
  inverted: boolean;
}>;

const StyledText = styled.span<VariantConfig>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, inverted }) => (inverted ? colors.greyscale[0] : color)};
  text-transform: ${({ textTransform }) => textTransform};
`;

type Props<T extends TextType> = Readonly<{
  children: ReactNode;
  type: T;
  variant: keyof TextTypes[T];
  inverted?: boolean;
}>;

const Text = <T extends TextType>({
  children, type, variant, inverted = false,
}: Props<T>): ReactElement => (
  <StyledText
    {...(types[type][variant] as VariantConfig)}
    inverted={inverted}
  >
    {children}
  </StyledText>
  );

export default Text;
