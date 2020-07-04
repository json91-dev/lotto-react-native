import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();


export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return store;
}
