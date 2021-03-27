import { all, fork, put, call, delay, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { CHECK_NICKNAME_FAILURE, CHECK_NICKNAME_REQUEST, CHECK_NICKNAME_SUCCESS } from '../reducers/user';

function checkNicknameAPI(nickname) {
  return axios.post('/user/check-nickname', nickname);
}

function* checkNickname(action) {
  try {
    const result = yield call(checkNicknameAPI, action.data);
  
    yield put({
      type: CHECK_NICKNAME_SUCCESS,
      data: result.data,
    });
    
  } catch (e) {
    yield put({
      type: CHECK_NICKNAME_FAILURE,
      error: e,
    });
  }
}

export function* watchCheckNickname() {
  yield takeEvery (CHECK_NICKNAME_REQUEST, checkNickname);
}

export default function* rootSaga() {
  yield  all([
    fork(watchCheckNickname),
  ]);
}
