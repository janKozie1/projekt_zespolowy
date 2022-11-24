import type { ReactElement } from 'react';

import { CircularProgress, Fade } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Loading = (): ReactElement => (
  <Container>
    <Fade>
      <CircularProgress color="primary" />
    </Fade>
  </Container>
);

export default Loading;
