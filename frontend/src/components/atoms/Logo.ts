import styled from 'styled-components';

import mountains from '../../assets/logo.png';

const Logo = styled.img.attrs(() => ({
  src: mountains,
}))`
  height: 30px;
`;

export default Logo;
