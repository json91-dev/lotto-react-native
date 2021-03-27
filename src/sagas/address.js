import { all, fork, put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ADDRESS_LIST_FAILURE,
  GET_ADDRESS_LIST_REQUEST, GET_ADDRESS_LIST_SUCCESS, GET_CURRENT_LOCATION_ADDRESS_FAILURE,
  GET_CURRENT_LOCATION_ADDRESS_REQUEST, GET_CURRENT_LOCATION_ADDRESS_SUCCESS,
} from '../reducers/address';
import { KakaoGeoSearchUrl, KakaoLoctaionSearchUrl, KakaoRestApiKey } from '../config/defaultValues';

/**
 * keyword로 주소목록 가져오기.
 */

function getAddressAPI(keyword) {
  const config = {
    headers: {
      Authorization: KakaoRestApiKey
    }
  };
  
  return axios.get(`${KakaoLoctaionSearchUrl}?query=${keyword}`, config);
}

function* getAddressListByKeyword(action) {
  try {
    const result = yield call(getAddressAPI, action.data);
    
    const addressList = result.data.documents;
    yield put({
      type: GET_ADDRESS_LIST_SUCCESS,
      data: addressList,
    });
    
  } catch(e) {
    yield put({
      type: GET_ADDRESS_LIST_FAILURE,
      error: e,
    });
  }
}

export function* watchGetAddressList() {
  yield takeEvery (GET_ADDRESS_LIST_REQUEST, getAddressListByKeyword);
}

/**
 * 내 위치 (위도, 경도)를 이용하여 현재 주소 찾기
 */

function getCurrentLocationAddressAPI(location) {
  const {longitude, latitude} = location;
  const config = {
    headers: {
      Authorization: KakaoRestApiKey
    }
  };
  
  return axios.get(`${KakaoGeoSearchUrl}?x=${longitude}&y=${latitude}`, config);
}

function* getCurrentAddressByLocation(action) {
  try {
    const result = yield call(getCurrentLocationAddressAPI, action.data)
    const currentLocationAddress = result.data.documents[0].address_name;
    
    yield put({
      type: GET_CURRENT_LOCATION_ADDRESS_SUCCESS,
      data: currentLocationAddress
    });
    
  } catch(e) {
    yield put({
      type: GET_CURRENT_LOCATION_ADDRESS_FAILURE,
      error: e
    });
  }
}

export function* watchGetCurrentAddress() {
  yield takeEvery (GET_CURRENT_LOCATION_ADDRESS_REQUEST, getCurrentAddressByLocation);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAddressList),
    fork(watchGetCurrentAddress),
  ]);
}
