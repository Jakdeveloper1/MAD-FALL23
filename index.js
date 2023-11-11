/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ToDoList from './components/ToDoList';
import {name as appName} from './app.json';
import { App } from './components/Touchables';

AppRegistry.registerComponent(appName, () => App);
