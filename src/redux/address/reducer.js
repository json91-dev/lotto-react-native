import {
  SELECT_ADDRESS_ITEM,
  DESELECT_ADDRESS_ITEM,
  GET_ADDRESS_LIST_REQUEST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_FAILURE,
  SET_INITIAL_SEARCH,
  GET_CURRENT_LOCATION_ADDRESS_REQUEST,
  GET_CURRENT_LOCATION_ADDRESS_SUCCESS,
  GET_CURRENT_LOCATION_ADDRESS_FAILURE,
} from '../actions';

export const INITIAL_SEARCH = 'INITIAL_SEARCH';
export const ADDRESS_SEARCH_SUCCESS = 'ADDRESS_SEARCH_SUCCESS';
export const ADDRESS_SEARCH_FAILED = 'ADDRESS_SEARCH_FAILED';
export const CURRENT_LOCATION_ADDRESS_SEARCH_SUCCESS = 'CURRENT_LOCATION_ADDRESS_SEARCH_SUCCESS';
export const CURRENT_LOCATION_ADDRESS_SEARCH_FAILED = 'CURRENT_LOCATION_ADDRESS_SEARCH_FAILED';

const InitialState = {
  // selectedAddressItem: null, // 주소 검색 결과에서 선택된 아이템 저장.
  isAddressSelected: false, // 주소 검색 결과에서 List의 특정 주소가 선택되었을 때의 상태 저장.
  addressList: [], // 주소 검색 결과로 얻어온 주소들의 배열 저장.
  searchResultState: INITIAL_SEARCH, // SearchAddress 컴포넌트의 상태값 저장
  error: '', // 발생한 에러 저장.
  isLoadingGetCurrentLocation: false, // 현재 위치 정보를 가져오는 로딩상태 저장.
  keyword: '', // 주소 검색시 키워드
  currentLocationAddress: '',
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case SET_INITIAL_SEARCH : {
      return {
        ...state,
        searchResultState: INITIAL_SEARCH,
      };
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
    
    /** keyword로 주소 얻어오기 * */
    
    // 주소 검색 실행
    case GET_ADDRESS_LIST_REQUEST: {
      return {
        ...state,
        keyword: action.data.keyword,
      };
    }
    
    // 주소 검색 후 결과 List 조회 성공
    case GET_ADDRESS_LIST_SUCCESS: {
      const { addressList } = action.data;
      
      if (action.data.addressList.length === 0) {
        return {
          ...state,
          addressList,
          searchResultState: ADDRESS_SEARCH_FAILED,
        };
      }
        return {
          ...state,
          addressList,
          searchResultState: ADDRESS_SEARCH_SUCCESS,
        };
      
    }
    
    // 주소 검색 후 결과 List 조회 실패
    case GET_ADDRESS_LIST_FAILURE: {
      return {
        ...state,
        error: action.data.message,
        searchResultState: ADDRESS_SEARCH_FAILED,
      };
    }
    
    /** 현재 주소 얻어오기 * */
    
    // 내 위치를 통해 현재 주소 검색
    case GET_CURRENT_LOCATION_ADDRESS_REQUEST: {
      return {
        ...state,
        error: action.data.message,
        searchResultState: INITIAL_SEARCH,
        isLoadingGetCurrentLocation: true,
      };
    }
    
    // 내 위치를 통해 현재 주소 성공
    case GET_CURRENT_LOCATION_ADDRESS_SUCCESS: {
      const { currentLocationAddress } = action.data;
      
      return {
        ...state,
        error: action.data.message,
        searchResultState: CURRENT_LOCATION_ADDRESS_SEARCH_SUCCESS,
        isLoadingGetCurrentLocation: false,
        currentLocationAddress,
      };
    }
    
    // 내 위치를 통해 현재 주소 실패
    case GET_CURRENT_LOCATION_ADDRESS_FAILURE: {
      return {
        ...state,
        error: action.data.message,
        searchResultState: CURRENT_LOCATION_ADDRESS_SEARCH_FAILED,
        isLoadingGetCurrentLocation: false,
      };
    }
    
    default:
      return { ...state };
  }
};
