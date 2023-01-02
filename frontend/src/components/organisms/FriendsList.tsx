import type { ReactElement } from 'react';

import isNil from 'lodash/isNil';

import { PeopleOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import useApiRequest, { emptyArgs } from '../../hooks/useApiRequest';
import type { User } from '../../services/api/types/data';
import { isEmpty, isNotNil } from '../../utils/guards';

import Text from '../atoms/Text';
import Icon from '../molecules/Icon';
import Loading from '../molecules/Loading';

import { useAPI } from './ApiProvider';
import { useConstantData } from './ConstantDataProvider';
import FriendListItem from './FriendListItem';

const FriendsList = (): ReactElement => {
  const { api, refreshQueries } = useAPI();
  const { users, loggedInUser } = useConstantData();

  const [notifications, { loading }] = useApiRequest(api.user.notifications, {
    immediateArgs: emptyArgs,
  });

  const onCancelFriendRequest = async (requestId: string) => {
    await api.user.friends.cancelRequest({ requestId });
    refreshQueries([api.user.notifications]);
  };

  const onRemoveFriend = async (friend: User) => {
    await api.user.friends.remove({ friendId: friend.id });
    refreshQueries([api.auth.loggedInUser]);
  };

  if (loading) {
    return <Loading />;
  }

  const renderedFriends = [
    ...(notifications?.data ?? []).map((notification) => {
      if (notification.kind === 'friendRequest' && notification.from === loggedInUser.id) {
        const to = users.find((user) => user.id === notification.to);
        return isNil(to)
          ? null
          : (
            <FriendListItem
              user={to}
              pending
              key={notification.id}
              onRemove={async () => onCancelFriendRequest(notification.id)}
            />
          );
      }
      return null;
    }),
    ...loggedInUser.friends.map((friendId) => {
      const friend = users.find((user) => user.id === friendId);

      return isNil(friend)
        ? null : <FriendListItem user={friend} key={friend.id} onRemove={onRemoveFriend} />;
    }),
  ].filter(isNotNil);

  if (isEmpty(renderedFriends)) {
    return (
      <Box width="100%" height="100%" flexDirection="column" display="flex" alignItems="center" justifyContent="center">
        <Text type="body" variant="default">Brak znajomych</Text>
        <Box mt={2}>
          <Icon size="lg">
            <PeopleOutlined />
          </Icon>
        </Box>
      </Box>
    );
  }

  return (
    <List>
      {renderedFriends}
    </List>
  );
};

export default FriendsList;
