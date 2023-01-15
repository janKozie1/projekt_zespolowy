import styled from 'styled-components';

import { toSpacing } from '../../config/theme/fields/spacing';

type Props = Readonly<{
  gap?: number;
}>;

const CalendarGrid = styled.div<Props>`
  display: grid;
  gap: ${({ gap = 0 }) => toSpacing(gap)};
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 1fr;
  width: 100%;
`;

export default CalendarGrid;
