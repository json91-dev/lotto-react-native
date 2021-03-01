import { all, call, fork, put, delay, takeEvery } from 'redux-saga/effects';
import {
  GET_LATEST_LOTTO_ROUNDS_REQUEST,
  GET_LATEST_LOTTO_ROUNDS_SUCCESS,
  GET_LATEST_LOTTO_ROUNDS_FAILURE,
  
  GET_WIN_LOTTO_NUMBER_REQUEST,
  GET_WIN_LOTTO_NUMBER_SUCCESS,
  GET_WIN_LOTTO_NUMBER_FAILURE,
} from '../reducers/lottonumber';

/**
 * 최근 로또 번호에 대한 회차 정보 가져오기
 */

function getLatestLottoRoundsAPI() {
  // 각 로또 라운드에서 최신 라운드를 가져오는 dummy 데이터
  const dummyLatestLottoRounds = [
    {
      round: 893,
      roundDate: '2020-09-20', //  dateTime 형식이 나은지??
    },
    
    {
      round: 892,
      roundDate: '2020-09-13',
    },
    
    {
      round: 891,
      roundDate: '2020-09-06',
    },
    
    {
      round: 890,
      roundDate: '2020-08-31',
    }
  ];
  
  return dummyLatestLottoRounds;
}

function* getLatestLottoRounds() {
  try {
    yield delay(2000);
    const latestLottoRounds = yield call(getLatestLottoRoundsAPI);
    
    // 최신 로또 라운드 조회 성공
    yield put({
      type: GET_LATEST_LOTTO_ROUNDS_SUCCESS,
      data: latestLottoRounds,
      
    });
    
    const { round } = latestLottoRounds[0];
    
    // 최신 로또 라운드의 결과에서 가장 최신의 round에 대해 로또 정보를 가져오는 Action dispatch
    yield put({
      type: GET_WIN_LOTTO_NUMBER_REQUEST,
      data: round,
    });
    
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_LATEST_LOTTO_ROUNDS_FAILURE,
      error: e,
    });
  }
}

function* watchGetLatestLottoRounds() {
  yield takeEvery (GET_LATEST_LOTTO_ROUNDS_REQUEST, getLatestLottoRounds);
}

/**
 * 해당 회차에 대한 로또 정보 가져오기
 */

function getWinLottoNumbersAPI(round) {
  // 요청한 회차의 당첨번호와 당첨 정보에 대한 데이터
  const dummyWinLottoNumbersList = [
    {
      round: 893,
      winNumber: [10, 20, 30, 40, 50, 60, 70],
      winnerInfo: [
        {
          prize: 1,
          numOfWin: 8,
          priceOfWin: 2639313235,
        },
        
        {
          prize: 2,
          numOfWin: 56,
          priceOfWin: 62840792,
        },
        
        {
          prize: 3,
          numOfWin: 3240,
          priceOfWin: 1086138,
        },
        
        {
          prize: 4,
          numOfWin: 137051,
          priceOfWin: 50000,
        },
        
        {
          prize: 5,
          numOfWin: 2005739,
          priceOfWin: 5000,
        },
      ],
    },
  
    {
      round: 892,
      winNumber: [32, 11, 24, 33, 12, 25, 26],
      winnerInfo: [
        {
          prize: 1,
          numOfWin: 8,
          priceOfWin: 3639613235,
        },
      
        {
          prize: 2,
          numOfWin: 56,
          priceOfWin: 62243255,
        },
      
        {
          prize: 3,
          numOfWin: 4120,
          priceOfWin: 3032134,
        },
      
        {
          prize: 4,
          numOfWin: 137051,
          priceOfWin: 50000,
        },
      
        {
          prize: 5,
          numOfWin: 1675839,
          priceOfWin: 5000,
        },
      ],
    },
  
    {
      round: 891,
      winNumber: [24, 23, 46, 57, 56, 35, 12],
      winnerInfo: [
        {
          prize: 1,
          numOfWin: 8,
          priceOfWin: 3636318235,
        },
      
        {
          prize: 2,
          numOfWin: 44,
          priceOfWin: 42840794,
        },
      
        {
          prize: 3,
          numOfWin: 3231,
          priceOfWin: 2056788,
        },
      
        {
          prize: 4,
          numOfWin: 131351,
          priceOfWin: 50000,
        },
      
        {
          prize: 5,
          numOfWin: 2364739,
          priceOfWin: 5000,
        },
      ],
    },
  
    {
      round: 890,
      winNumber: [44, 43, 21, 25, 10, 22, 41],
      winnerInfo: [
        {
          prize: 1,
          numOfWin: 11,
          priceOfWin: 324931235,
        },
      
        {
          prize: 2,
          numOfWin: 56,
          priceOfWin: 64240792,
        },
      
        {
          prize: 3,
          numOfWin: 1982,
          priceOfWin: 2011138,
        },
      
        {
          prize: 4,
          numOfWin: 123890,
          priceOfWin: 50000,
        },
      
        {
          prize: 5,
          numOfWin: 3045739,
          priceOfWin: 5000,
        },
      ],
    },
  ];
  
  const lottoNumberAndDetail = dummyWinLottoNumbersList.filter((object) => {
    return object.round === round;
  });
  
  return lottoNumberAndDetail[0];
}

function* getWinLottoNumbers(action) {
  try {
    const winLottoNumbers = yield call(getWinLottoNumbersAPI, action.data);
    
    yield put({
      type: GET_WIN_LOTTO_NUMBER_SUCCESS,
      data: winLottoNumbers,
    });
  } catch (e) {
    yield put({
      type: GET_WIN_LOTTO_NUMBER_FAILURE,
      error: e,
    });
  }
}

function* watchGetWinLottoNumbers() {
  yield takeEvery (GET_WIN_LOTTO_NUMBER_REQUEST, getWinLottoNumbers);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetLatestLottoRounds),
    fork(watchGetWinLottoNumbers),
  ]);
}
