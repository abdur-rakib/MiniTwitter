/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import './ignoreWarnings';
import {name as appName} from './app.json';
import dayjs from 'dayjs';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
const persistor = persistStore(store);

const RootComponent = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RootComponent);
