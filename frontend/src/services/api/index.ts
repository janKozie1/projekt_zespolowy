import { makeLocalStorageAPI } from './localStorageAPI';
import type { API } from './types';
import { syncToDelayedAPI } from './utils';

const api: API = syncToDelayedAPI(makeLocalStorageAPI(), 500);

export default api;
