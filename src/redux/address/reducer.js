import {
  SELECT_ADDRESS_ITEM,
  DESELECT_ADDRESS_ITEM,
  GET_ADDRESS_LIST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_ERROR,
  SET_INITIAL_SEARCH,
} from '../actions';

export const INITIAL_SEARCH = 'INITIAL_SEARCH';
export const ADDRESS_SEARCH_SUCCESS = 'ADDRESS_SEARCH_SUCCESS';
export const ADDRESS_SEARCH_FAILED = 'ADDRESS_SEARCH_FAILED';
export const CURRENT_ADDRESS_SEARCH_SUCCESS = 'CURRENT_ADDRESS_SEARCH_SUCCESS';
export const CURRENT_ADDRESS_SEARCH_FAILED = 'CURRENT_ADDRESS_SEARCH_FAILED';


const InitialState = {
  selectedAddressItem: null, // 주소 검색 결과에서 선택된 아이템 저장.
  isAddressSelected: false, // 주소 검색 결과에서 List의 특정 주소가 선택되었을 때의 상태 저장.
  addressList: [], // 주소 검색 결과로 얻어온 주소들의 배열 저장.
  searchResultState: INITIAL_SEARCH, // SearchAddress 컴포넌트의 상태값 저장
  error: '', // 발생한 에러 저장.
  isLoadingCurrentLocation: false, // 현재 위치 정보를 가져오는 로딩상태 저장.
  keyword: '', // 주소 검색시 키워드
};


export default (state = InitialState, action) => {
  switch (action.type) {
    case SET_INITIAL_SEARCH : {
      return {
        ...state,
        searchResultState: INITIAL_SEARCH
      }
    }
    
    // 주소 검색 결과 아이템 선택.
    case SELECT_ADDRESS_ITEM : {
      return {
        ...state,
        isAddressSelected: true,
      };
    }
    
    // 주소 검색 결과 아이템 선택 취소.
    case DESELECT_ADDRESS_ITEM : {
      return {
        ...state,
        isAddressSelected: false,
      };
    }
    
    case GET_ADDRESS_LIST: {
      return {
        ...state,
        keyword: action.payload.keyword,
      };
    }
    
    // 주소 검색 후 결과 List 조회 성공
    case GET_ADDRESS_LIST_SUCCESS: {
      if (action.payload.addressList.length === 0) {
        return {
          ...state,
          addressList: action.payload.addressList,
          searchResultState: ADDRESS_SEARCH_FAILED,
        };
      } else {
        return {
          ...state,
          addressList: action.payload.addressList,
          searchResultState: ADDRESS_SEARCH_SUCCESS,
        };
      }
    }
    
    // 주소 검색 후 결과 List 조회 실패
    case GET_ADDRESS_LIST_ERROR: {
      return {
        ...state,
        error: action.payload.message,
        searchResultState: ADDRESS_SEARCH_FAILED,
      };
    }
    
    
    default:
      return {...state};
  }
}
