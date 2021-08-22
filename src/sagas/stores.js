import { all, fork, put, call, delay, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_STORES_FAILURE,
  GET_STORES_RADIUS_FAILURE,
  GET_STORES_RADIUS_REQUEST,
  GET_STORES_RADIUS_SUCCESS,
  GET_STORES_REQUEST,
  GET_STORES_SUCCESS,
} from '../reducers/stores';

/**
 * keyword로 주소목록 가져오기.
 */

const dummyStore = [
  {
    "id": 135,
    "address": "서울 송파구 문정동 652-5 문정아이파크 1층",
    "address_new": "서울 송파구 법원로4길 6 문정아이파크 문정아이파크 1층",
    "name": "복권방",
    "phone": null,
    "region1": "서울",
    "region2": "송파구",
    "storetype": "일반",
    "latitude": 37.482317,
    "longitude": 127.12211,
    "distance": 0.12884871015055427
  },
  {
    "id": 65,
    "address": "서울 송파구 문정동 72-3 제상가동 제1층 102호",
    "address_new": "서울 송파구 새말로8길 14 건영아파트 제상가동 제1층 102호",
    "name": "다모아 복권방",
    "phone": null,
    "region1": "서울",
    "region2": "송파구",
    "storetype": "일반",
    "latitude": 37.481514,
    "longitude": 127.12584,
    "distance": 0.2883941850494078
  },
  {
    "id": 1259,
    "address": "서울 송파구 문정동 61-7",
    "address_new": "서울 송파구 문정로4길 10-30 대림빌딩",
    "name": "GS25(문정중앙점)",
    "phone": "02-449-4575",
    "region1": "서울",
    "region2": "송파구",
    "storetype": "GS",
    "latitude": 37.485523,
    "longitude": 127.12457,
    "distance": 0.2978066580004139
  },
  {
    "id": 211,
    "address": "서울 송파구 문정동 620 153호 CU편의점",
    "address_new": "서울 송파구 새말로 62 송파 푸르지오시티 153호 CU편의점",
    "name": "씨유 송파푸르지오점",
    "phone": "02-449-0788",
    "region1": "서울",
    "region2": "송파구",
    "storetype": "CU",
    "latitude": 37.480755,
    "longitude": 127.121225,
    "distance": 0.3117478601964157
  },
  {
    "id": 94,
    "address": "서울 송파구 문정동 644-2 1층 128호",
    "address_new": "서울 송파구 법원로11길 7 문정현대지식산업센터1-2 1층 128호",
    "name": "크로바쎄븐",
    "phone": "02-3431-1089",
    "region1": "서울",
    "region2": "송파구",
    "storetype": "일반",
    "latitude": 37.485355,
    "longitude": 127.119226,
    "distance": 0.4348177701010866
  },
  {
    "id": 1210,
    "address": "서울 송파구 문정동 97-4",
    "address_new": "서울 송파구 새말로 142",
    "name": "명진슈퍼",
    "phone": "02-430-9938",
    "region1": "서울",
    "region2": "송파구",
    "storetype": "일반",
    "latitude": 37.483518,
    "longitude": 127.129625,
    "distance": 0.5671348093502442
  },
  {
    "id": 202,
    "address": "서울 송파구 문정동 634 테크노관 10층 T-10011호",
    "address_new": "서울 송파구 충민로 66 가든파이브라이프 테크노관 10층 T-10011호",
    "name": "가든 파이브점 ",
    "phone": null,
    "region1": "서울",
    "region2": "송파구",
    "storetype": "일반",
    "latitude": 37.47764,
    "longitude": 127.124973,
    "distance": 0.6229488094322183
  },
  {
    "id": 1211,
    "address": "서울 송파구 문정동 30-17 1층",
    "address_new": "서울 송파구 동남로6길 14 1층",
    "name": "해피데이마트",
    "phone": "02-409-9792",
    "region1": "서울",
    "region2": "송파구",
    "storetype": "일반",
    "latitude": 37.489029,
    "longitude": 127.124651,
    "distance": 0.6747725173071556
  },
  {
    "id": 197,
    "address": "서울 송파구 문정동 640-7",
    "address_new": "서울 송파구 정의로8길 13 수성위너스",
    "name": "사랑복권",
    "phone": null,
    "region1": "서울",
    "region2": "송파구",
    "storetype": "일반",
    "latitude": 37.486379,
    "longitude": 127.11543,
    "distance": 0.779982792860009
  }
];

function getStoresAPI() {
  // return axios.get('/stores');
  return {
    data: dummyStore,
  };
}

function* getStores(action) {
  try {
    yield delay(2000);
    const result = yield call(getStoresAPI, action.data);
  
    yield put({
      type: GET_STORES_SUCCESS,
      data: result.data,
    });
    
  } catch(e) {
    yield put({
      type: GET_STORES_FAILURE,
      error: e,
    });
  }
}

export function* watchGetStore() {
  yield takeEvery (GET_STORES_REQUEST, getStores);
}

function getStoresRadiusAPI(location) {
  const { longitude, latitude, radius } = location;
  console.log(axios.defaults.baseURL);
  return axios.get(`/stores/searchRadius?long=${longitude}&lat=${latitude}&rad=${radius}`);
}

function* getStoresRadius(action) {
  try {
    const result = yield call(getStoresRadiusAPI, action.data);
    
    yield put({
      type: GET_STORES_RADIUS_SUCCESS,
      data: {
        stores: result.data,
        latitude: action.data.latitude,
        longitude: action.data.longitude,
        radius: action.data.radius,
      },
    });
    
  } catch(e) {
    yield put({
      type: GET_STORES_RADIUS_FAILURE,
      error: e,
    });
  }
}

export function* watchGetStoreRadius() {
  yield takeEvery (GET_STORES_RADIUS_REQUEST, getStoresRadius);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetStore),
    fork(watchGetStoreRadius),
  ]);
}
