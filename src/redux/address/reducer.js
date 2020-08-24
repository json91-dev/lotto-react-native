import  {
  SELECT_ADDRESS_ITEM,
  DESELECT_ADDRESS_ITEM,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_ERROR
} from '../actions'

export const SEARCH_RESULT_INIT = 'SEARCH_RESULT_INIT';
export const ADDRESS_SEARCH_SUCCESS = 'ADDRESS_SEARCH_SUCCESS';
export const ADDRESS_SEARCH_FAILED = 'ADDRESS_SEARCH_FAILED';
export const CURRENT_LOCATION_SEARCH_SUCCESS = 'CURRENT_LOCATION_SEARCH_SUCCESS';
export const CURRENT_LOCATION_SEARCH_FAILED = 'CURRENT_LOCATION_SEARCH_FAILED';


const InitialState = {
  selectedAddressItem: null,
  isAddressSelected: false,
  addressList: [],
  error: '',
  searchResultState: SEARCH_RESULT_INIT,
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
