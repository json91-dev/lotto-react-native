import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ADDRESS_LIST,
} from '../actions';


import {
  getAddressListSuccess,
  getAddressListError
} from './actions';
import { KakaoLoctaionSearchUrl, KakaoRestApiKey } from '../../constraints/defaultValues';


export function* watchGetAddressList() {
  yield takeEvery (GET_ADDRESS_LIST, getAddressListByKeyword)
}

function* getAddressListByKeyword({payload}) {
  const { keyword } = payload;
  try {
    const config = {
      headers: {
        Authorization: KakaoRestApiKey
      }
    };
    
    const result = yield axios.get(`${KakaoLoctaionSearchUrl}?query=${keyword}`, config);
    const addressList = result.data.documents;
    // console.log(addressList);
    yield put(getAddressListSuccess(addressList));
    
  } catch(error) {
    yield put(getAddressListError(error.message))
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAddressList),
  ]);
}
