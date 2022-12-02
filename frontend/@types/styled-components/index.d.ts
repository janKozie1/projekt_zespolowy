import 'styled-components';

import { Theme } from '../../src/config/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    _: Theme;
  }
}
