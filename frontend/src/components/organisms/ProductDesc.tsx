import type { ReactElement } from 'react';

import Box from '@mui/material/Box';
import styled from 'styled-components';

import Columns from '../atoms/Columns';
import Rows from '../atoms/Rows';
import Text from '../atoms/Text';

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ProductDesc = (): ReactElement => (
  <CardContainer>
    <Box p={8} display="flex" flexDirection="column" flexGrow="1">
      <Rows gap={16}>
        <Rows gap={0}>
          <Rows gap={16}>
            <Text><h1>Title</h1></Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</Text>
          </Rows>
          <Rows gap={2}>
            <Text>aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</Text>
          </Rows>
          <Rows gap={8}>
            <Text>It is a long established fact that a reader will be distracted by the readable content</Text>
            <Text>packages and web page editors now use Lorem Ipsum as their</Text>
          </Rows>
        </Rows>
        <Columns gap={8}>
          <Text>#ŚWIĘTA</Text>
          <Text>#OZDOBNE</Text>
        </Columns>
      </Rows>
    </Box>
  </CardContainer>
);

export default ProductDesc;
