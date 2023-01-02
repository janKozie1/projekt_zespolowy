import type { ReactElement } from 'react';
import { useRef, useState } from 'react';

import { useNavigate } from 'react-router';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';

import { HomeRoutes } from '../../../config/paths';

import Divider from '../../atoms/Divider';
import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import Tile from '../../atoms/Tile';
import Avatar from '../../molecules/Avatar';
import PageHeader from '../../molecules/PageHeader';
import { useAPI } from '../../organisms/ApiProvider';
import type { Props as BillingAddressFormProps } from '../../organisms/BillingAddressForm';
import BillingAddressForm from '../../organisms/BillingAddressForm';
import type { Props as ChangePasswordFormProps, FormRef as ChangePasswordFormRef } from '../../organisms/ChangePasswordForm';
import ChangePasswordForm from '../../organisms/ChangePasswordForm';
import { useConstantData } from '../../organisms/ConstantDataProvider';
import type { Props as FriendRequestFormProps, FormRef as FriendRequestFormRef } from '../../organisms/FriendRequestForm';
import FriendRequestForm from '../../organisms/FriendRequestForm';
import FriendsList from '../../organisms/FriendsList';
import Notifications from '../../organisms/Notifications';
import type { Props as PaymentMethodFormProps } from '../../organisms/PaymentMethodForm';
import PaymentMethodForm from '../../organisms/PaymentMethodForm';

enum Tabs {
  notifications = 'notifications',
  security = 'security',
  paymentPreferences = 'paymentPreferences',
  friends = 'friends',
}

const Profile = (): ReactElement => {
  const { loggedInUser } = useConstantData();
  const { api, refreshQueries } = useAPI();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(Tabs.notifications);

  const changePasswordFormRef = useRef<ChangePasswordFormRef>(null);
  const frirendRequestFormRef = useRef<FriendRequestFormRef>(null);

  const changePasswordSubmitHandler: ChangePasswordFormProps['submitHandler'] = {
    onSubmit: api.auth.changePassword,
    onSuccess: () => {
      changePasswordFormRef.current?.reset({
        repeatedPassword: '',
        password: '',
        currentPassword: '',
      });
    },
  };

  const billingAddressSubmitHandler: BillingAddressFormProps['submitHandler'] = {
    onSubmit: api.user.updateBillingAddress,
    onSuccess: () => refreshQueries([api.auth.loggedInUser]),
  };

  const paymentMethodSubmitHandler: PaymentMethodFormProps['submitHandler'] = {
    onSubmit: api.user.updatePaymentInfo,
    onSuccess: () => refreshQueries([api.auth.loggedInUser]),
  };

  const friendRequestSubmitHandler: FriendRequestFormProps['submitHandler'] = {
    onSubmit: api.user.addToFriends,
    onSuccess: () => {
      frirendRequestFormRef.current?.reset({
        friendEmail: '',
      });
      refreshQueries([api.user.notifications]);
    },
  };

  const onAccountDelete = async () => {
    await api.auth.deleteAccount();
    navigate(HomeRoutes.HOME);
  };

  return (
    <PageContainer>
      <Rows gap={4}>
        <PageHeader title="Profil" />
        <Tile>
          <Box display="flex" height="100%">
            <Box p={4} display="flex" flexDirection="column" gap={10} alignItems="center">
              <Avatar user={loggedInUser} variant="xxl" />
              <Text type="heading" variant="h5">
                {loggedInUser.email}
              </Text>
            </Box>
            <Box ml={4} height="100%">
              <Divider vertical />
            </Box>
            <Box mt={-4} width="100%">
              <TabContext value={activeTab}>
                <TabList onChange={(_, newTab: Tabs) => setActiveTab(newTab)} aria-label="lab API tabs example">
                  <Tab label="Powiadomienia" value={Tabs.notifications} />
                  <Tab label="Płatności" value={Tabs.paymentPreferences} />
                  <Tab label="Bezpieczeństwo" value={Tabs.security} />
                  <Tab label="Znajomi" value={Tabs.friends} />
                </TabList>
                <Box mt={-0.5} width="100%"><Divider /></Box>
                <Box p={4}>
                  <TabPanel value={Tabs.notifications}>
                    <Notifications />
                  </TabPanel>
                  <TabPanel value={Tabs.paymentPreferences}>
                    <Rows gap={6}>
                      <Rows gap={4}>
                        <Text type="body" variant="default">
                          Adres rozliczeniowy
                        </Text>
                        <Box width="30%">
                          <BillingAddressForm
                            submitHandler={billingAddressSubmitHandler}
                            initialData={loggedInUser.details?.billingAddress}
                          />
                        </Box>
                      </Rows>
                      <Divider />
                      <Rows gap={4}>
                        <Text type="body" variant="default">
                          Preferowana metoda płatności
                        </Text>
                        <Box width="30%">
                          <PaymentMethodForm
                            submitHandler={paymentMethodSubmitHandler}
                            initialData={loggedInUser.details?.payments}
                          />
                        </Box>
                      </Rows>
                    </Rows>
                  </TabPanel>
                  <TabPanel value={Tabs.security}>
                    <Rows gap={6}>
                      <Rows gap={4}>
                        <Text type="body" variant="default">
                          Zmień hasło
                        </Text>
                        <Box width="30%">
                          <ChangePasswordForm
                            submitHandler={changePasswordSubmitHandler}
                            ref={changePasswordFormRef}
                          />
                        </Box>
                      </Rows>
                      <Divider />
                      <Rows gap={4}>
                        <Text type="body" variant="default">
                          Usuń konto
                        </Text>
                        <Box width="30%" mt={4}>
                          <Button variant="contained" color="error" onClick={onAccountDelete}>
                            Usuń
                          </Button>
                        </Box>
                      </Rows>
                    </Rows>
                  </TabPanel>
                  <TabPanel value={Tabs.friends}>
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
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Box>
        </Tile>
      </Rows>
    </PageContainer>
  );
};

export default Profile;
