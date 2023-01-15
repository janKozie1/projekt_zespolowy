import type { ReactElement } from 'react';
import { useState, Fragment } from 'react';

import { isNil } from 'lodash';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import type { ListProps } from '@mui/material/List';
import MuiList from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { isEmpty } from '../../utils/guards';
import type { Nullable } from '../../utils/types';

import Text from '../atoms/Text';

type ListItem = Readonly<{
  id: string;
  label: string;
  children?: ListItem[];
}>;

type Props = Readonly<{
  items: ListItem[];
  selectedItems: Nullable<string[]>;
  onChange: (id: string) => void;
  padding?: number;
  listProps?: ListProps & Readonly<{ component: 'div' }>;
  nested?: boolean;
}>;

const List = ({
  items, selectedItems, onChange, padding = 0, listProps,
}: Props): ReactElement => {
  const [expanded, setExpanded] = useState<Record<string, Nullable<boolean>>>({});

  const defaultListProps: ListProps<'nav'> & { component: 'nav' } = {
    sx: { width: '280px', bgcolor: 'background.paper' },
    component: 'nav',
  };

  return (
    <MuiList {...(listProps ?? defaultListProps as ListProps)}>
      {items.map((item) => {
        if (isEmpty(item.children)) {
          return (
            <ListItemButton sx={{ pl: padding, py: 0 }} key={item.id} onClick={() => onChange(item.id)}>
              {isNil(selectedItems) ? (
                <Box pl={4} />
              ) : (
                <ListItemIcon>
                  <Checkbox checked={selectedItems.includes(item.id)} />
                </ListItemIcon>
              )}
              <ListItemText primary={<Text type="body" variant="small">{item.label}</Text>} />
            </ListItemButton>
          );
        }

        const open = expanded[item.id] ?? false;

        return (
          <Fragment key={item.id}>
            <ListItemButton sx={{ pl: padding }} onClick={() => setExpanded((prev) => ({ ...prev, [item.id]: !open }))}>
              <Box pl={4} />
              <ListItemText primary={item.label} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List
                items={item.children}
                onChange={onChange}
                selectedItems={selectedItems}
                padding={padding + 4}
                nested
                listProps={{ component: 'div', disablePadding: true }}
              />
            </Collapse>
          </Fragment>
        );
      })}
    </MuiList>
  );
};

export default List;
