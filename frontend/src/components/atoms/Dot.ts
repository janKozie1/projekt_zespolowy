import styled from 'styled-components';

type Props = Readonly<{
  color: string;
}>;

const Dot = styled.div<Props>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export default Dot;
