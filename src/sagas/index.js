import { all } from 'redux-saga/effects';
import axios from 'axios';
import addressSagas from './address';
import lottonumberSagas from './lottonumber';
import { backUrl } from "../config/config";

axios.defaults.baseURL = `${backUrl}/api`;

export default function* rootSaga() {
  yield all([
    addressSagas(),
    lottonumberSagas(),
  ]);
}
