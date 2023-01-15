import type { ReactElement } from 'react';

import './services/validation/yup';
import 'react-calendar/dist/Calendar.css';

import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

import config from './config';
import routes from './config/routes';

import ApiProvider from './components/organisms/ApiProvider';
import RenderRoutes from './components/organisms/RenderRoutes';
import ThemeProvider from './components/organisms/ThemeProvider';

const App = (): ReactElement => (
  <ThemeProvider>
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <ApiProvider>
        <Router basename={config.basePath}>
          <Helmet titleTemplate={`%s - ${config.titleName}`} defaultTitle={config.titleName} defer />
          <Routes>
            <Route path="*" element={<RenderRoutes routes={routes} />} />
          </Routes>
        </Router>
      </ApiProvider>
    </LocalizationProvider>
  </ThemeProvider>
);

export default App;
