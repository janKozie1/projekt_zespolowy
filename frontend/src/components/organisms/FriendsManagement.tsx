import type { ReactElement } from 'react';
import { useRef } from 'react';

import Box from '@mui/material/Box';

import Divider from '../atoms/Divider';
import Rows from '../atoms/Rows';
import Text from '../atoms/Text';

import { useAPI } from './ApiProvider';
import type { Props as FriendRequestFormProps, FormRef as FriendRequestFormRef } from './FriendRequestForm';
import FriendRequestForm from './FriendRequestForm';
import FriendsList from './FriendsList';

const FriendsManagement = (): ReactElement => {
  const { api, refreshQueries } = useAPI();
  const frirendRequestFormRef = useRef<FriendRequestFormRef>(null);

  const friendRequestSubmitHandler: FriendRequestFormProps['submitHandler'] = {
    onSubmit: api.user.friends.add,
    onSuccess: () => {
      frirendRequestFormRef.current?.reset({
        friendEmail: '',
      });
      refreshQueries([api.user.notifications]);
    },
  };

  return (
    <Rows gap={6}>
      <Rows gap={4}>
        <Text type="body" variant="default">
          Dodaj znajomego
        </Text>
        <Box width="30%">
          <FriendRequestForm
            submitHandler={friendRequestSubmitHandler}
            ref={frirendRequestFormRef}
          />
        </Box>
      </Rows>
      <Divider />
      <Rows gap={4}>
        <Text type="body" variant="default">
          Wszyscy znajomi
        </Text>
        <FriendsList />
      </Rows>
    </Rows>
  );
};

export default FriendsManagement;
