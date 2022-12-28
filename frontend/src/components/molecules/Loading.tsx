import type { ReactElement } from 'react';

import styled from 'styled-components';

import { CircularProgress } from '@mui/material';

const variants = {
  submit: '26px',
  calendarDay: '18px',
  default: undefined,
};

type Variant = keyof typeof variants;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

type Props = Readonly<{
  variant?: Variant;
}>;

const Loading = ({ variant = 'default' }: Props): ReactElement => (
  <Container>
    <CircularProgress color="primary" size={variants[variant]} />
  </Container>
);

export default Loading;
