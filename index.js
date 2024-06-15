/**
 * @format
 */
import 'react-native-gesture-handler'; // Ensure this line is at the top
import { enableScreens } from 'react-native-screens';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

enableScreens();
AppRegistry.registerComponent(appName, () => App);
