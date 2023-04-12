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

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const RootComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RootComponent);
