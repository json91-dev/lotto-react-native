import {
  GET_ADDRESS_LIST_REQUEST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_FAILURE,
  SELECT_ADDRESS_ITEM,
  DESELECT_ADDRESS_ITEM,
  SET_INITIAL_SEARCH,
  GET_CURRENT_LOCATION_ADDRESS_REQUEST,
  GET_CURRENT_LOCATION_ADDRESS_SUCCESS,
  GET_CURRENT_LOCATION_ADDRESS_FAILURE,
} from '../actions';

export const selectAddressItem = () => ({
  type: SELECT_ADDRESS_ITEM,
  data: {}
});

export const deselectAddressItem = () => ({
  type: DESELECT_ADDRESS_ITEM,
  data: {}
});

/** 초기 상태 Action * */
export const setInitialSearch = () => ({
  type: SET_INITIAL_SEARCH,
  data: {},
});

/** 주소 검색 Actions * */
export const getAddressList = (keyword) => ({
  type: GET_ADDRESS_LIST_REQUEST,
  data: {
    keyword,
  }
});

export const getAddressListSuccess = (addressList) => ({
  type: GET_ADDRESS_LIST_SUCCESS,
  data: {
    addressList,
  }
});

export const getAddressListError = (message) => ({
  type: GET_ADDRESS_LIST_FAILURE,
  data: {message}
});

/** 내 위치 검색 Actions * */

export const getCurrentLocationAddress = (longitude, latitude)  => ({
  type: GET_CURRENT_LOCATION_ADDRESS_REQUEST,
  data: {
    longitude, // 경도
    latitude, // 위도
  }
});

export const getCurrentLocationAddressSuccess = (currentLocationAddress) => ({
  type: GET_CURRENT_LOCATION_ADDRESS_SUCCESS,
  data: {
    currentLocationAddress,
  }
});

export const getCurrentLocationAddressError = (message) => ({
  type: GET_CURRENT_LOCATION_ADDRESS_FAILURE,
  data: {message}
});
