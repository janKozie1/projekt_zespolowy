import styled from 'styled-components';

const CalendarCell = styled.div`
  height: ${({ theme }) => theme._.sizes.height.calendarCell};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => theme._.borders.styles.thin.greyscale[10]};
  border-radius: ${({ theme }) => theme._.borders.radii.md};
  cursor: pointer;
  transition: box-shadow 0.3s;
  position: relative;

  & > *:nth-child(2) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 130%);
  }

  &:hover {
    box-shadow: ${({ theme }) => theme._.shadows.weak};
  }
`;

export default CalendarCell;
