import {
  GET_WIN_LOTTO_NUMBER_REQUEST, GET_LATEST_LOTTO_ROUNDS_REQUEST,
} from '../actions';

export const getLatestLottoRound = () => ({
  type: GET_LATEST_LOTTO_ROUNDS_REQUEST,
  data: {},
});

export const getWinLottoNumber = (round) => ({
  type: GET_WIN_LOTTO_NUMBER_REQUEST,
  data: {
    round,
  },
});
