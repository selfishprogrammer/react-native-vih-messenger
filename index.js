/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
export const myApp = ({hashCode, onClose}) => {
  return (
    <Provider store={store}>
      <App hashCode={hashCode} onClose={onClose} />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => myApp);
