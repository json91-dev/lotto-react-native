
export const GET_STORES_REQUEST = 'GET_STORES_REQUEST';
export const GET_STORES_SUCCESS = 'GET_STORES_SUCCESS';
export const GET_STORES_FAILURE = 'GET_STORES_FAILURE';

export const GET_STORES_RADIUS_REQUEST = 'GET_STORES_RADIUS_REQUEST';
export const GET_STORES_RADIUS_SUCCESS = 'GET_STORES_RADIUS_SUCCESS';
export const GET_STORES_RADIUS_FAILURE = 'GET_STORES_RADIUS_FAILURE';

const InitialState = {
  stores: [],
  getStoresErrorReason: '',
  isGettingStores: false,
  getStoresRadiusErrorReason: '',
  isGettingStoresRadius: false,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case GET_STORES_REQUEST : {
      return {
        ...state,
        isGettingStores: true,
      };
    }
    
    case GET_STORES_SUCCESS : {
      return {
        ...state,
        stores: action.data,
        isGettingStores: false,
      };
    }
  
    case GET_STORES_FAILURE : {
      return {
        ...state,
        getStoresErrorReason: action.error,
        isGettingStores: false,
      };
    }
  
    case GET_STORES_RADIUS_REQUEST : {
      return {
        ...state,
        isGettingStoresRadius: true,
      };
    }
  
    case GET_STORES_RADIUS_SUCCESS : {
      return {
        ...state,
        stores: action.data,
        isGettingStoresRadius: false,
      };
    }
  
    case GET_STORES_RADIUS_FAILURE : {
      return {
        ...state,
        getStoresRadiusErrorReason: action.error,
        isGettingStoresRadius: false,
      };
    }
    
    default: {
      break;
    }
  }
};
