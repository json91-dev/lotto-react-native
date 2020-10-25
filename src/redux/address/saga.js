import { all, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ADDRESS_LIST_REQUEST,
  GET_CURRENT_LOCATION_ADDRESS_REQUEST,
} from '../actions';

import {
  getAddressListSuccess,
  getAddressListError,
  getCurrentLocationAddressSuccess,
  getCurrentLocationAddressError
} from './actions';
import { KakaoGeoSearchUrl, KakaoLoctaionSearchUrl, KakaoRestApiKey } from '../../constraints/defaultValues';

/**
 * keyword로 주소목록 가져오기.
 */
export function* watchGetAddressList() {
  yield takeEvery (GET_ADDRESS_LIST_REQUEST, getAddressListByKeyword);
}

function* getAddressListByKeyword({data}) {
  const { keyword } = data;
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
    yield put(getAddressListError(error.message));
  }
}

/**
 * 내 위치 (위도, 경도)를 이용하여 현재 주소 찾기
 */
export function* watchGetCurrentAddress() {
  yield takeEvery (GET_CURRENT_LOCATION_ADDRESS_REQUEST, getCurrentAddressByLocation);
}

function* getCurrentAddressByLocation({data}) {
  const { longitude, latitude } = data;
  try {
    const config = {
      headers: {
        Authorization: KakaoRestApiKey
      }
    };
    
    const result = yield axios.get(`${KakaoGeoSearchUrl}?x=${longitude}&y=${latitude}`, config);
    const currentLocationAddress = result.data.documents[0].address_name;
    
    yield put(getCurrentLocationAddressSuccess(currentLocationAddress));
    
  } catch(error) {
    console.log(error);
    yield put(getCurrentLocationAddressError(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAddressList),
    fork(watchGetCurrentAddress),
  ]);
}
