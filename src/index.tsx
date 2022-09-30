import ReactDOM from 'react-dom/client';
import { createContext } from 'react';

import UserStore from './store/UserStore';
import LocationStore from './store/LocationStore';

import { userTest, coordinatesTest } from './utils/consts';
import { $FixMe } from './models/any';

import App from './App';
import './index.css';

export const Context = createContext<$FixMe>(null);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <Context.Provider value={{
    user: new UserStore(true, userTest),
    location: new LocationStore('Kharkiv', coordinatesTest)
  }}>
    <App />
  </Context.Provider>
);

