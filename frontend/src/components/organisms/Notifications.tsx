import type { ReactElement } from 'react';

import isNil from 'lodash/isNil';

import { CancelOutlined, CheckCircleOutlined, NotificationsNoneOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import useApiRequest, { emptyArgs } from '../../hooks/useApiRequest';
import { isEmpty, isNotNil } from '../../utils/guards';

import Columns from '../atoms/Columns';
import Text from '../atoms/Text';
import Avatar from '../molecules/Avatar';
import Icon from '../molecules/Icon';
import Loading from '../molecules/Loading';

import { useAPI } from './ApiProvider';
import { useConstantData } from './ConstantDataProvider';

const Notifications = (): ReactElement => {
  const { api, refreshQueries } = useAPI();
  const { users, loggedInUser } = useConstantData();

  const [notifications, { loading }] = useApiRequest(api.user.notifications, {
    immediateArgs: emptyArgs,
  });

  const onNotificationConfirm = async (confirmation: boolean, id: string) => {
    await api.notifications.confirmNotification({
      confirmation,
      id,
    });

    refreshQueries([api.user.notifications, api.auth.loggedInUser]);
  };

  if (loading) {
    return <Loading />;
  }

  const renderedNotifications = notifications?.data?.map((notification) => {
    if (notification.kind === 'friendRequest' && notification.from !== loggedInUser.id) {
      const from = users.find((user) => user.id === notification.from);

      return isNil(from) ? null : (
        <ListItem key={notification.id}>
          <ListItemAvatar>
            <Avatar user={from} variant="md" />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <>
                Użytkownik
                <b>
                  {' '}
                  {from.email}
                  {' '}
                </b>
                zaprosił Cię do znajomych
              </>
            )}
          />
          <Box ml="auto">
            <Columns gap={2}>
              <IconButton
                aria-label="delete"
                onClick={async () => onNotificationConfirm(true, notification.id)}
                color="success"
              >
                <CheckCircleOutlined />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={async () => onNotificationConfirm(false, notification.id)}
                color="error"
              >
                <CancelOutlined />
              </IconButton>
            </Columns>
          </Box>
        </ListItem>
      );
    }

    return null;
  }).filter(isNotNil);

  if (isEmpty(renderedNotifications)) {
    return (
      <Box width="100%" height="100%" flexDirection="column" display="flex" alignItems="center" justifyContent="center">
        <Text type="body" variant="default">Brak powiadomień</Text>
        <Box mt={2}>
          <Icon size="lg">
            <NotificationsNoneOutlined />
          </Icon>
        </Box>
      </Box>
    );
  }

  return (
    <List>
      {renderedNotifications}
    </List>
  );
};

export default Notifications;
