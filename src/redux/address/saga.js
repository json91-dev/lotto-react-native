import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ADDRESS_LIST,
  GET_CURRENT_LOCATION_ADDRESS,
} from '../actions';


import {
  getAddressListSuccess,
  getAddressListError,
  getCurrentLocationAddressSuccess,
  getCurrentLocationAddressError
} from './actions';
import { KakaoGeoSearchUrl, KakaoLoctaionSearchUrl, KakaoRestApiKey } from '../../constraints/defaultValues';


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

// 내 위치를 통한 현재 주소 검색

export function* watchGetCurrentAddress() {
  yield takeEvery (GET_CURRENT_LOCATION_ADDRESS, getCurrentAddressByLocation)
}


function* getCurrentAddressByLocation({payload}) {
  const { longitude, latitude } = payload;
  try {
    const config = {
      headers: {
        Authorization: KakaoRestApiKey
      }
    };
  
    console.log(`${KakaoGeoSearchUrl}?x=${longitude}&y=${latitude}`);
    const result = yield axios.get(`${KakaoGeoSearchUrl}?x=${longitude}&y=${latitude}`, config);
    
    const currentLocationAddress = result.data.documents[0].address_name;
    console.log(currentLocationAddress);
    yield put(getCurrentLocationAddressSuccess(currentLocationAddress));
    
  } catch(error) {
    console.log(error)
    yield put(getCurrentLocationAddressError(error.message))
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAddressList),
    fork(watchGetCurrentAddress),
  ]);
}
