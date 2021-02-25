import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import index from './index';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(index, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return store;
}
