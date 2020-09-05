import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  selectAddressItem,
  deselectAddressItem,
  setInitialSearch,
} from '../../redux/actions';

import {
  INITIAL_SEARCH, // 검색전 맨 처음화면
  ADDRESS_SEARCH_SUCCESS, // 주소 검색이 성공했을때
  ADDRESS_SEARCH_FAILED, // 주소 검색이 실패했을때
  CURRENT_LOCATION_ADDRESS_SEARCH_SUCCESS, // 내 위치 찾기가 성공했을때
  CURRENT_LOCATION_ADDRESS_SEARCH_FAILED,
  
} // 내 위치 찾기가 실패했을때
  from '../../redux/address/reducer';
import { getItemFromAsync, setItemToAsync } from '../../helpers/AsyncStroageHelper';

// address 주소 검색 후
const AddressSearch = (props) => {
  const [addressSearchResultItems, setAddressSearchResultItems] = React.useState([]);
  
  /**
   * useEffect
   * 1. 주소값을 가진 배열을 입력받는다.
   * 2. 해당 배열을 selected 값을 포함시킨 objectItems로 변환시켜준다.
   */
  
  const { addressList } = props;
  useEffect(() => {
    let updateArray = [...addressList];
    updateArray = updateArray.map((item, index) => {
      return { address_name: item.address_name, index: index, selected: false };
    });
    
    setAddressSearchResultItems(updateArray);
    
  }, [addressList]);
  
  /**
   * 주소 Item이 클릭되었을때 동작하는 함수.
   */
  const onPressAddressSearchResultItem = (item, index) => () => {
    let updateArray = [...addressSearchResultItems];
    
    updateArray.map((item) => {
      if (item.index === index) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    });
    
    setAddressSearchResultItems(updateArray);
    props.selectAddressItem();
    const { address_name } = updateArray[index];
    props.setInputText(address_name);
    
  };
  
  // '다시 검색하기' 버튼 클릭시 동작하는 이벤트 리스너
  const onPressSearchAgain = () => {
    props.textInputRef.focus(); // AddressScreen으로 부터 받은 callback
    props.setInputText(''); // AddressScreen으로 부터 받은 callback
    
    props.setInitialSearch();
    
  };
  
  const searchResult = () => {
    const { searchResultState, keyword, currentLocationAddress, setInputText, selectAddressItem } = props;
    
    switch (searchResultState) {
      // 초기 검색 시
      case INITIAL_SEARCH: {
        return (
          <View>
          
          </View>
        );
      }
      
      // 검색 결과 화면
      case ADDRESS_SEARCH_SUCCESS: {
        console.log(props.keyword);
        return (
          <View style={{ flex: 1, paddingBottom: 70 }}>
            <Text style={styles.searchResultLabel}>'{keyword.trim()}' 검색 결과</Text>
            
            <FlatList
              style={styles.addressFlat}
              data={addressSearchResultItems}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.addressTouch}
                    onPress={onPressAddressSearchResultItem(item, index)}
                  >
                    <Text>{item.address_name}</Text>
                    {
                      (item.selected === true)
                        ? <Image style={styles.circleImage} source={require('../../assets/ic_circle_select_on.png')}/>
                        : <Image style={styles.circleImage} source={require('../../assets/ic_circle_cancel_on.png')}/>
                    }
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        );
      }
      
      case ADDRESS_SEARCH_FAILED: {
        return (
          <View style={styles.searchFailView}>
            <Image style={styles.searchFailImage} source={require('../../assets/ic_disappoint_persion.png')}/>
            <Text style={styles.searchFailTitle}>검색결과가 없습니다.</Text>
            <Text style={styles.searchFailSubTitle}>검색 내용을 확인해주세요.</Text>
            <TouchableOpacity style={styles.searchFailTouch} onPress={onPressSearchAgain}>
              <Text style={styles.searchFailTouchText}>다시 검색하기</Text>
            </TouchableOpacity>
          </View>
        );
      }
      
      case CURRENT_LOCATION_ADDRESS_SEARCH_SUCCESS: {
        (async () => {
          setInputText(currentLocationAddress); // 받아온 위치를 현재 내 위치로 저장함.
          selectAddressItem();
          const singinInfo = await getItemFromAsync('signinInfo');
          await setItemToAsync('singninInfo', { ...singinInfo, address: currentLocationAddress });
          
          
        })();
        return (
          <View>
          
          </View>
        );
      }
      
      case CURRENT_LOCATION_ADDRESS_SEARCH_FAILED: {
        
        return (
          <View style={styles.searchFailView}>
            <Image style={styles.searchFailImage} source={require('../../assets/ic_disappoint_persion.png')}/>
            <Text style={styles.searchFailTitle}>현재 위치를 불러오지 못했습니다.</Text>
            <Text style={styles.searchFailSubTitle}>직접 검색으로 지역을 등록해주세요.</Text>
            <TouchableOpacity style={styles.searchFailTouch}>
              <Text style={styles.searchFailTouchText}>직접 검색하기</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
    
  };
  
  
  return (
    <View style={styles.container}>
      {searchResult()}
    </View>
  );
};

const mapStateToProps = ({ address }) => {
  const { isAddressSelected,  addressList, searchResultState, keyword, currentLocationAddress } = address;
  
  return {
    isAddressSelected,
    addressList,
    searchResultState,
    keyword,
    currentLocationAddress
  };
};

export default connect(
  mapStateToProps,
  {
    selectAddressItem,
    deselectAddressItem,
    setInitialSearch,
  },
)(AddressSearch);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
  },
  
  addressFlat: {
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EDEDED',
  },
  
  addressTouch: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#EDEDED',
    
  },
  
  circleImage: {
    width: 16,
    height: 16,
    resizeMode: 'cover',
  },
  
  searchResultLabel: {
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#3b3f4a',
    marginTop: 24,
    marginBottom: 11,
    
  },
  
  searchFailView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    
  },
  
  searchFailImage: {
    width: '60%',
    height: '50%',
    resizeMode: 'contain',
    
  },
  
  searchFailTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3b3f4a',
    marginTop: 15,
  },
  
  searchFailSubTitle: {
    fontWeight: '600',
    fontSize: 14,
    color: '#74798a',
    marginTop: 5,
  },
  
  searchFailTouch: {
    width: 150,
    height: 40,
    backgroundColor: '#1939EF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  
  searchFailTouchText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  
});
