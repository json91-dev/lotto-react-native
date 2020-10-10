/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import Root from './screen/RootNavigator';

/**
 * 리덕스 기본 세팅
 *
 * 1. Provider 컴포넌트를 통해 하위 컴포넌트들이 redux store에 접근할수 있도록 설정한다.
 * 2. Configuration 되어진 Store를 불러와서 해당 Provider와 연결시킨다.
 *
 */

import configureStore from './redux/configureStore';

const store = configureStore();

const App  = () => {
  return (
    <Provider store={store}>
      <Root/>
    </Provider>
  );
};

export default App;
