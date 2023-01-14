import type { ReactElement } from 'react';
import { useState } from 'react';

import { PeopleAltOutlined } from '@mui/icons-material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import { useDrawers } from '../../../hooks/useDrawers';
import type { GiftReceiver } from '../../../services/api/types/data';
import { AddPersonDrawerModel } from '../../../services/drawers/models';
import { isEmpty } from '../../../utils/guards';

import Divider from '../../atoms/Divider';
import PageContainer from '../../atoms/PageContainer';
import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import Tile from '../../atoms/Tile';
import Icon from '../../molecules/Icon';
import PageHeader from '../../molecules/PageHeader';
import { useAPI } from '../../organisms/ApiProvider';
import { useConstantData } from '../../organisms/ConstantDataProvider';
import FriendListItem from '../../organisms/FriendListItem';
import FriendsManagement from '../../organisms/FriendsManagement';

enum Tabs {
  people = 'people',
  friends = 'friends',
}

const People = (): ReactElement => {
  const { api, refreshQueries } = useAPI();

  const [activeTab, setActiveTab] = useState(Tabs.people);
  const [search, setSearch] = useState('');

  const { loggedInUser } = useConstantData();

  const onPersonRemove = async (giftReceiver: GiftReceiver) => {
    await api.user.giftReceivers.remove({ receiverId: giftReceiver.id });
    refreshQueries([api.auth.loggedInUser]);
  };

  const matchesSearchQuery = (giftReceiver: GiftReceiver) => (isEmpty(search)
    ? true
    : giftReceiver.address.nameAndSurname.toLowerCase().includes(search.toLocaleLowerCase()));

  const { open } = useDrawers();

  const filteredPeople = loggedInUser.giftReceivers.filter(matchesSearchQuery);

  return (
    <PageContainer>
      <Rows gap={4}>
        <PageHeader title="Osoby" />
        <Tile>
          <Box width="100%">
            <TabContext value={activeTab}>
              <TabList onChange={(_, newTab: Tabs) => setActiveTab(newTab)}>
                <Tab label="Osoby" value={Tabs.people} />
                <Tab label="Znajomi" value={Tabs.friends} />
              </TabList>
              <Box mt={-0.5} width="100%"><Divider /></Box>
              <Box p={4} width="100%">
                <TabPanel value={Tabs.people}>
                  <Rows gap={6}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <TextField
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        label="Wyszukaj"
                        placeholder="Wyszukaj"
                      />
                      <Button variant="contained" onClick={() => open(AddPersonDrawerModel())}>
                        Dodaj osobę
                      </Button>
                    </Box>
                    <Divider />
                    {isEmpty(filteredPeople) ? (
                      <Box width="100%" height="100%" flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                        <Text type="body" variant="default">Brak osób</Text>
                        <Box mt={2}>
                          <Icon size="lg">
                            <PeopleAltOutlined />
                          </Icon>
                        </Box>
                      </Box>
                    ) : filteredPeople.map((receiver) => (
                      <FriendListItem
                        key={receiver.id}
                        user={{
                          ...receiver,
                          email: `${receiver.address.nameAndSurname}`,
                        }}
                        onRemove={onPersonRemove}
                      />
                    ))}
                  </Rows>
                </TabPanel>
                <TabPanel value={Tabs.friends}>
                  <FriendsManagement />
                </TabPanel>
              </Box>
            </TabContext>
          </Box>

        </Tile>
      </Rows>
    </PageContainer>
  );
};

export default People;
