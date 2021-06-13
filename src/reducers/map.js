export const SET_MAP_TOUCH = 'SET_MAP_TOUCH';

const InitialState = {
  isMapTouch: false,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    
    case SET_MAP_TOUCH : {
      return {
        ...state,
        isMapTouch: action.data,
      };
    }
    
    default: {
      return {
        ...state,
      };
    }
  }
};
