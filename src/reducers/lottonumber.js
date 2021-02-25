// 최신 로또 회차 검색
export const GET_LATEST_LOTTO_ROUNDS_REQUEST = "GET_LATEST_LOTTO_ROUNDS_REQUEST";
export const GET_LATEST_LOTTO_ROUNDS_SUCCESS= "GET_LATEST_LOTTO_ROUNDS_SUCCESS";
export const GET_LATEST_LOTTO_ROUNDS_FAILURE = "GET_LATEST_LOTTO_ROUNDS_FAILURE";

// 로또 번호 검색
export const GET_WIN_LOTTO_NUMBER_REQUEST = "GET_WIN_LOTTO_NUMBER_REQUEST";
export const GET_WIN_LOTTO_NUMBER_SUCCESS= "GET_WIN_LOTTO_NUMBER_SUCCESS";
export const GET_WIN_LOTTO_NUMBER_FAILURE= "GET_WIN_LOTTO_NUMBER_FAILURE";

const InitialState = {
  isGettingLatestLottoRound: false, // 최근 로또 라운드 조회중
  latestLottoRounds: [], // 최근 로또 라운드
  isGettingLatestLottoRoundError: '',
  
  isGettingWinLottoNumbers: false, // 로또 당첨 번호 조회중
  winLottoNumbers: {}, // 로또 당첨번호
  isGettingWinLottoNumbersError: '',
};

export default (state = InitialState, action) => {
  switch (action.type) {
    
    /** 로또 최신 회차 얻어오기 **/
    case GET_LATEST_LOTTO_ROUNDS_REQUEST: {
      return {
        ...state,
        isGettingLatestLottoRound: true,
      };
    }
    
    case GET_LATEST_LOTTO_ROUNDS_SUCCESS: {
      const latestLottoRounds  = action.data;
      return {
        ...state,
        isGettingLatestLottoRound: false,
        latestLottoRounds,
      };
    }
    
    case GET_LATEST_LOTTO_ROUNDS_FAILURE: {
      return {
        ...state,
        isGettingLatestLottoRound: false,
        isGettingWinLottoNumbersError: action.error,
      };
    }
    
    /** 로또 번호 얻어오기 **/
    case GET_WIN_LOTTO_NUMBER_REQUEST: {
      return {
        ...state,
        isGettingWinLottoNumbers: true,
      };
    }
    
    case GET_WIN_LOTTO_NUMBER_SUCCESS: {
      const winLottoNumbers  = action.data;
      
      return {
        ...state,
        isGettingWinLottoNumbers: false,
        winLottoNumbers,
      };
    }
    
    case GET_WIN_LOTTO_NUMBER_FAILURE: {
      return {
        ...state,
        isGettingWinLottoNumbers: false,
        isGettingWinLottoNumbersError: action.error,
      };
    }
    
    default:
      return { ...state };
  }
};
