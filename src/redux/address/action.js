import {
  SEARCH_ADDRESS,
  SEARCH_ADDRESS_SUCCESS,
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


