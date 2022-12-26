import styled, { css } from 'styled-components';

type Props = Readonly<{
  vertical?: boolean;
}>;

const Divider = styled.div<Props>`
  background: ${({ theme }) => theme._.colors.greyscale[30]};
  ${({ vertical = false }) => {
    if (vertical) {
      return css`
        height: 100%;
        width: 2px;
      `;
    }

    return css`
      width: 100%;
      height: 2px;
    `;
  }}
`;

export default Divider;
