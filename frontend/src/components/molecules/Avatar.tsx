import type { ReactElement } from 'react';

import add from 'lodash/add';
import styled from 'styled-components';

import MuiAvatar from '@mui/material/Avatar';

import colors from '../../config/theme/fields/colors';
import type { User } from '../../services/api/types/data';

const variants = {
  sm: {
    avatarSize: '12px',
    fontSize: '10px',
  },
  md: {
    avatarSize: '24px',
    fontSize: '13px',
  },
  lg: {
    avatarSize: '36px',
    fontSize: '20px',
  },
  xxl: {
    avatarSize: '150px',
    fontSize: '80px',
  },
};

type Variant = keyof typeof variants;

type TextContainerProps = Readonly<{
  variant: Variant;
}>;

const TextContainer = styled.div<TextContainerProps>`
  font-size: ${({ variant }) => variants[variant].fontSize};
`;

type Props = Readonly<{
  user: User;
  variant: Variant;
}>;

const Avatar = ({ user, variant }: Props): ReactElement => {
  const hashed = user.email.split('')
    .map((char) => char.charCodeAt(0))
    .reduce(add, 0);

  const color = colors.avatars[hashed % colors.avatars.length];
  const size = variants[variant].avatarSize;

  return (
    <MuiAvatar sx={{ bgcolor: color, width: size, height: size }}>
      <TextContainer variant={variant}>
        {user.email.slice(0, 2).toLocaleUpperCase()}
      </TextContainer>
    </MuiAvatar>
  );
};

export default Avatar;
