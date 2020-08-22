import {
  GET_ADDRESS_LIST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_ERROR,
  SELECT_ADDRESS_ITEM,
  DESELECT_ADDRESS_ITEM,
} from '../actions';

export const selectAddressItem = () => ({
  type: SELECT_ADDRESS_ITEM,
  payload: {}
});

export const deselectAddressItem = () => ({
  type: DESELECT_ADDRESS_ITEM,
  payload: {}
});

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




