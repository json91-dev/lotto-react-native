import { combineReducers } from 'redux';
import address from './address';
import lottonumber from './lottonumber';
import stores from './stores';

/**
 * 모든 리듀서를 불러온다.
 * 이후 combineReducers 함수를 통해 많은 리듀서를 하나의 리듀서로 관리할수 있도록 설정한다.
 */
const index = combineReducers({
  address,
  lottonumber,
  stores
});

export default index;
