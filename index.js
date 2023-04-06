/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import dayjs from 'dayjs';

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

AppRegistry.registerComponent(appName, () => App);
