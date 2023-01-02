
import type { ReactElement } from 'react';

import { CancelOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import type { User } from '../../services/api/types/data';

import Avatar from '../molecules/Avatar';

type BaseUser = Pick<User, 'email' | 'id'>;

type Props<T extends BaseUser> = Readonly<{
  user: T;
  pending?: boolean;
  onRemove: (user: T) => void;
}>;

const FriendListItem = <T extends BaseUser>({ user, pending = false, onRemove }: Props<T>): ReactElement => (
  <ListItem>
    <ListItemAvatar>
      <Avatar user={user} variant="md" />
    </ListItemAvatar>
    <ListItemText
      primary={`${user.email} ${pending ? '(oczekuje na potwierdzenie)' : ''}`}
    />
    <Box ml="auto">
      <IconButton
        aria-label="delete"
        onClick={() => onRemove(user)}
        color="error"
      >
        <CancelOutlined />
      </IconButton>
    </Box>
  </ListItem>
);

export default FriendListItem;
