/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Root from './screen/RootNavigator'
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'

const store = configureStore();

const App  = () => {
  return (
    <Provider store={store}>
      <Root/>
    </Provider>
  );
};

export default App;
