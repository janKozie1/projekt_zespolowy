import styled from 'styled-components';

import { toSpacing } from '../../config/theme/fields/spacing';

const CalendarGrid = styled.div`
  display: grid;
  gap: ${toSpacing(5)};
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 1fr;
`;

export default CalendarGrid;
