import styled from 'styled-components';

const CalendarCell = styled.div`
  height: ${({ theme }) => theme._.sizes.height.calendarCell};
  width: ${({ theme }) => theme._.sizes.width.calendarCell};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => theme._.borders.styles.thin.greyscale[100]};
  border-radius: ${({ theme }) => theme._.borders.radii.md};
  cursor: pointer;
`;

export default CalendarCell;
