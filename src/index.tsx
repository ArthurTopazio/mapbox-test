import ReactDOM from 'react-dom/client';
import { createContext } from 'react';

import UserStore from './store/UserStore';
import LocationStore from './store/LocationStore';
import CitiesStore from './store/CitiesStore';

import { userTest, coordinatesTest } from './utils/consts';
import { $FixMe } from './models/any';

import App from './App';
import './index.css';

export const Context = createContext<$FixMe>(null);
const rootState = {
  user: new UserStore(true, userTest),
  location: new LocationStore('Kharkiv', coordinatesTest),
  cities: new CitiesStore()
};
export type RootState = ReturnType<() => typeof rootState>;

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <Context.Provider value={rootState}>
    <App />
  </Context.Provider>
);

