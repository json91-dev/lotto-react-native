
export const GET_STORES_REQUEST = 'GET_STORES_REQUEST';
export const GET_STORES_SUCCESS = 'GET_STORES_SUCCESS';
export const GET_STORES_FAILURE = 'GET_STORES_FAILURE';

export const GET_STORES_RADIUS_REQUEST = 'GET_STORES_RADIUS_REQUEST';
export const GET_STORES_RADIUS_SUCCESS = 'GET_STORES_RADIUS_SUCCESS';
export const GET_STORES_RADIUS_FAILURE = 'GET_STORES_RADIUS_FAILURE';

export const SET_CURRENT_STORE = 'SET_CURRENT_STORE';
export const SET_CURRENT_RADIUS = "GET_CURRENT_RADIUS";

const InitialState = {
  stores: [],
  currentStore: {},
  currentRadius: 1,
  currentLatitude: 0.0,
  currentLongitude: 0.0,
  getStoresErrorReason: '',
  isGettingStores: false,
  getStoresRadiusErrorReason: '',
  isGettingStoresRadius: false,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case SET_CURRENT_STORE: {
      return {
        ...state,
        currentStore: action.data,
      };
    }
  
    case SET_CURRENT_RADIUS : {
      return {
        ...state,
        currentRadius: action.data,
      };
    }
    
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
        currentLatitude: action.data.latitude,
        currentLongitude: action.data.longitude,
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
      return {
        ...state,
      };
    }
  }
};
