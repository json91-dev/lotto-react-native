import { all } from 'redux-saga/effects';
import addressSagas from './address';
import lottonumberSagas from './lottonumber';

export default function* rootSaga(getState) {
  yield all([
    addressSagas(),
    lottonumberSagas(),
  ]);
}
