import { all } from 'redux-saga/effects';
import axios from 'axios';
import addressSagas from './address';
import lottonumberSagas from './lottonumber';
import storesSagas from './stores';
import userSagas from './user';
import config from "../config/config";

axios.defaults.baseURL = `${config.API_URL}/api`;

export default function* rootSaga() {
  yield all([
    addressSagas(),
    lottonumberSagas(),
    storesSagas(),
    userSagas(),
  ]);
}
