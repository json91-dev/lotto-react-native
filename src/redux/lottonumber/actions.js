import {
  GET_LATEST_LOTTO_ROUNDS_REQUEST,
  GET_LATEST_LOTTO_ROUNDS_SUCCESS,
  GET_LATEST_LOTTO_ROUNDS_FAILURE,
  
  GET_WINNING_NUMBER_REQUEST,
  GET_WINNING_NUMBER_SUCCESS,
  GET_WINNING_NUMBER_FAILURE,

} from '../actions';
import { INITIAL_SEARCH } from '../address/reducer';

const InitialState = {
  latestLottoRound: -1,
  winningLottoNumbers: [],
  latestLottoRounds: [],
};

const dummyWinningLottoNumbers = [
  {
    lottoNumber: [10, 20, 30, 40, 50, 60, 70],
  },
];

const dummyLatestLottoRounds = [
  {
    roundNo: 893,
    roundDate: '2020-09-20' //  dateTime 형식이 나은지??
  },
  
  {
    roundNo: 892,
    roundDate: '2020-09-13'
  }
]

export default (state = InitialState, action) => {
  switch (action.type) {
    // case SET_INITIAL_SEARCH : {
    //   return {
    //     ...state,
    //     searchResultState: INITIAL_SEARCH,
    //   };
    // }
    case GET_LATEST_LOTTO_ROUNDS_REQUEST: {
      return {
        ...state
      };
    }
  
    case GET_LATEST_LOTTO_ROUNDS_SUCCESS: {
      return {
        ...state
      };
    }
  
    case GET_LATEST_LOTTO_ROUNDS_FAILURE: {
      return {
        ...state
      };
    }
  
    case GET_WINNING_NUMBER_REQUEST: {
      return {
        ...state
      };
    }
  
    case GET_WINNING_NUMBER_SUCCESS: {
      return {
        ...state
      };
    }
  
    case GET_WINNING_NUMBER_FAILURE: {
      return {
        ...state
      };
    }
    
    default:
      return { ...state };
  }
};
