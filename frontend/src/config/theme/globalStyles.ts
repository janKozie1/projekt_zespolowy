import { css } from 'styled-components';

import { htmlFontScale, letterSpacing } from './fields/typography/sizes';

import theme from '.';

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: ${htmlFontScale * 100}%;
  }

  html,
  body,
  body > #root {
    font-family: ${theme.typography.typefaces.default}, sans-serif;
    height: 100%;
    letter-spacing: ${letterSpacing};
    overflow: hidden;

    * {
      font-family: inherit;
      letter-spacing: inherit;
    }
  }
  body > #root {
    display: flex;
    margin-left: auto;
    margin-right: auto;

  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default globalStyle;
