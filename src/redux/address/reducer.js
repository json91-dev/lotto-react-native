import {
  SELECT_ADDRESS_ITEM,
  DESELECT_ADDRESS_ITEM,
  SEARCH_ADDRESS_SUCCESS,
  SEARCH_ADDRESS
} from '../actions'


const InitialState = {
  addressItems: [],
  selectedAddressItem: null,
  isAddressSelected: false,
};


export default (state = InitialState, action) => {
  switch (action.type) {

    case SELECT_ADDRESS_ITEM : {
      return {
        ...state,
        isAddressSelected: true,
      }
    }

    case DESELECT_ADDRESS_ITEM : {
      return {
        ...state,
        isAddressSelected: false,
      }
    }

    default: return { ...state };
  }
}
