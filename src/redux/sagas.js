import { all } from 'redux-saga/effects';
import addressSagas from './address/saga';
import lottonumberSagas from './lottonumber/saga';

export default function* rootSaga(getState) {
  yield all([
    addressSagas(),
    lottonumberSagas(),
  ]);
}
