export const CHECK_NICKNAME_REQUEST = 'CHECK_NICKNAME_REQUEST';
export const CHECK_NICKNAME_SUCCESS = 'CHECK_NICKNAME_SUCCESS';
export const CHECK_NICKNAME_FAILURE = 'CHECK_NICKNAME_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

const InitialState = {
  existNickname: true, // 닉네임 존재 여부
};

export default (state = InitialState, action) => {
  
  switch (action.type) {
    case CHECK_NICKNAME_REQUEST : {
      return {
        ...state,
      };
    }
    
    case CHECK_NICKNAME_SUCCESS : {
      return {
        ...state,
      };
    }
    
    case CHECK_NICKNAME_FAILURE : {
      return {
        ...state,
      };
    }
    
    case SIGN_UP_REQUEST : {
      return {
        ...state,
      };
    }
    
    case SIGN_UP_SUCCESS : {
      return {
        ...state,
      };
    }
    
    case SIGN_UP_FAILURE : {
      return {
        ...state,
      };
    }
    
    default: {
      return {
        ...state,
      };
    }
  }
};
