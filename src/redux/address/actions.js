import {
  GET_ADDRESS_LIST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_ERROR,
  SELECT_ADDRESS_ITEM,
  DESELECT_ADDRESS_ITEM, SET_INITIAL_SEARCH,
} from '../actions';

export const selectAddressItem = () => ({
  type: SELECT_ADDRESS_ITEM,
  payload: {}
});

export const deselectAddressItem = () => ({
  type: DESELECT_ADDRESS_ITEM,
  payload: {}
});

/** 초기 상태 Action **/
export const setInitialSearch = () => ({
  type: SET_INITIAL_SEARCH,
  payload: {},
});

/** 주소 검색 Actions **/
export const getAddressList = (keyword) => ({
  type: GET_ADDRESS_LIST,
  payload: {
    keyword,
  }
});

export const getAddressListSuccess = (addressList) => ({
  type: GET_ADDRESS_LIST_SUCCESS,
  payload: {
    addressList,
  }
});

export const getAddressListError = (message) => ({
  type: GET_ADDRESS_LIST_ERROR,
  payload: {message}
});

/** 내 위치 검색 Actions **/

// export const getCurrentAddress =




