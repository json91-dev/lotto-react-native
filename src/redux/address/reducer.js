import {
  SELECT_ADDRESS_ITEM,
  DESELECT_ADDRESS_ITEM,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_ERROR
} from '../actions'


const InitialState = {
  selectedAddressItem: null,
  isAddressSelected: false,
  addressList: [],
  error: '',
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
    
    case GET_ADDRESS_LIST_SUCCESS: {
      return {
        ...state,
        addressList: action.payload.addressList,
      }
    }
    
    case GET_ADDRESS_LIST_ERROR: {
      return {
        ...state,
        error: action.payload.message,
      }
    }

    default: return { ...state };
  }
}
