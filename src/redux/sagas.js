import { all } from 'redux-saga/effects'
import addressSagas from './address/saga'

export default function* rootSaga(getState) {
  yield all([
    addressSagas(),
  ])
}

