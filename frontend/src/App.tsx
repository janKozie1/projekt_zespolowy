import type { ReactElement } from 'react';

import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

import config from './config';
import routes from './config/routes';

import ApiProvider from './components/organisms/ApiProvider';
import RenderRoutes from './components/organisms/RenderRoutes';
import ThemeProvider from './components/organisms/ThemeProvider';

const App = (): ReactElement => (
  <ThemeProvider>
    <ApiProvider>
      <Router basename={config.basePath}>
        <Helmet titleTemplate={`%s - ${config.titleName}`} defaultTitle={config.titleName} defer />
        <Routes>
          <Route path="*" element={<RenderRoutes routes={routes} />} />
        </Routes>
      </Router>
    </ApiProvider>
  </ThemeProvider>
);

export default App;
