import React, {Component, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { isIphoneX } from "react-native-iphone-x-helper";
import { getFontSize } from '../helpers/Utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const vh = windowHeight / 100;
// const vw = windowWidth / 100;

const LottoStoreSheetHeader = (props) => {
  
  const { setIsOpenedMapLinkButtons } = props;
  const currentStore = useSelector(state => state.stores.currentStore);
  let firstPrizeCount = 0;
  let secondPrizeCount = 0;
  let storeName = '없음';
  
  if (currentStore) {
    storeName = currentStore.name;
    firstPrizeCount = currentStore.Winnings.filter((item) => item.rank === 1).length;
    secondPrizeCount = currentStore.Winnings.filter((item) => item.rank === 2).length;
  }
  
  switch (props.bottomSheetState) {
    case 'bottom': {
      return (
        <View style={styles.bottomContainer}>
          <View style={styles.topBarView}>
            <View style={styles.topBarInnerView} />
          </View>
          
          <View style={styles.storeTitleView}>
            <View>
              <Text style={styles.storeNameText}>{storeName}</Text>
              <View style={styles.storeDetailView}>
                <Text style={{color: '#abbdbe', marginRight: 5}}>1등</Text>
                <Text style={{color: '#74798a'}}>{firstPrizeCount}회</Text>
                <Text style={{color: '#74798a', marginLeft: 15, marginRight: 15}}>|</Text>
                <Text style={{color: "#abbdbe", marginRight: 5}}>2등</Text>
                <Text style={{color: '#74798a'}}>{secondPrizeCount}회</Text>
              </View>
            </View>
            <TouchableOpacity style={{justifyContent: 'center'}}>
              <Image style={styles.findRoadImage} source={require('../assets/ic_find_road.png')}/>
            </TouchableOpacity>
          </View>
          
          <View style={styles.storeAddressView}>
            <View style={styles.storeAddressViewLeft}>
              <Text style={styles.storeAddressText}>{currentStore.address} </Text>
            </View>
            <View style={styles.storeAddressViewRight}>
              <Text style={styles.moreDetailDistanceText}>418m</Text>
            </View>
          </View>
          
          { !isIphoneX() ? // iPhoneX 일때는 하단선을 표시하지 않음
              <View style={styles.bottomBarView}>
                <View style={styles.bottomBarInnerView} />
              </View>
            : null
          }
        </View>
      );
    }
    
    case 'middle': {
      return (
        <View style={styles.middleContainer}>
          <View style={styles.topBarView}>
            <View style={styles.topBarInnerView} />
          </View>
          
          <View style={[styles.storeTitleView, {paddingLeft: 20, paddingRight: 20}]}>
            <Text style={styles.storeNameText}>스파</Text>
            <TouchableOpacity>
              <Image style={styles.favoriteImage} source={require('../assets/ic_favorite_star.png')}/>
            </TouchableOpacity>
          </View>
          
          <View style={[styles.storeDetailView, {paddingLeft: 20, paddingRight: 20}]}>
            {/* <Text>118m  |  방문  76  |  찜  1.27 </Text> */}
            <Text style={{color: "#abbdbe"}}>방문  </Text>
            <Text style={{color: '#74798a'}}>76</Text>
            <Text style={{color: '#74798a'}}>  |  </Text>
            <Text style={{color: "#abbdbe"}}>찜  </Text>
            <Text style={{color: '#74798a'}}>1.27 </Text>
          </View>
          
          <View style={[styles.divider, {marginTop: 15, marginBottom: 12,}]} />
          
          <View style={styles.storeMoreDetailView}>
            <View style={styles.moreDetailLeftView}>
              <Text style={styles.moreDetailAddressText}>서울 성북구 종암동 132 종암우림카이저팰리스 1층</Text>
              <Text style={styles.moreDetailDistanceText}>418m</Text>
            </View>
            <TouchableOpacity onPress={()=> setIsOpenedMapLinkButtons(true)}>
              <Image style={styles.findRoadImage} source={require('../assets/ic_find_road.png')}/>
            </TouchableOpacity>
          </View>
  
          <View style={[styles.divider, {marginTop: 7, height: 5}]} />
          
        </View>
      );
    }
  
    case 'top': {
      return (
        <View style={styles.topContainer}>
          <View style={styles.topContainerHeaderView}>
            <TouchableOpacity>
              <Image style={styles.topContainerHeaderViewBackImage} source={require('../assets/ic_back_arrow.png')} />
            </TouchableOpacity>
            
            <Text style={styles.topContainerHeaderViewText}>스파</Text>
            
            <TouchableOpacity>
              <Image style={styles.topContainerHeaderViewBackStarImage} source={require('../assets/ic_favorite_star.png')}/>
            </TouchableOpacity>
          </View>
  
          <View style={styles.divider} />
          
          <View style={styles.topContainerBottomView}>
            <View style={styles.topContainerBottomViewLeft}>
              <Text style={styles.topContainerBottomViewLeftAddressText}>서울 성북구 종암동 132 종암우림카이저팰리스 1층 101호 </Text>
              <Text style={styles.topContainerBottomViewLeftDistanceText}>418m</Text>
            </View>
            <TouchableOpacity onPress={()=> setIsOpenedMapLinkButtons(true)}>
              <Image style={styles.findRoadImage} source={require('../assets/ic_find_road.png')}/>
            </TouchableOpacity>
          </View>
  
          <View style={styles.divider} />
        </View>
      );
    }
    
    default: {
      return null;
    }
  }
  
};

LottoStoreSheetHeader.propTypes = {
  bottomSheetState: PropTypes.oneOf(['bottom', 'middle', 'top']),
  setIsOpenedMapLinkButtons: PropTypes.func.isRequired,
};

export default LottoStoreSheetHeader;

const styles = StyleSheet.create({
  // 최하단의 바텀시트
  bottomContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    height: 160,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'center'
  },
  
  storeTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  favoriteImage: {
    width: 20,
    height: 20,
  },
  
  storeNameText: {
    fontSize: getFontSize() + 6,
    marginBottom: vh,
  },
  
  storeDetailView: {
    fontSize: getFontSize(),
    flexDirection: 'row',
    marginBottom: 10,
  },
  
  storeAddressText: {
    fontSize: getFontSize(),
    color: "#74798a"
  },
  
  storeGuideTouch: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#2157f3',
    marginTop: 10,
    marginBottom: 21,
  },
  
  storeGuideText: {
    color: 'white',
  },
  
  // 중단의 바텀시트
  middleContainer: {
    marginTop: 7,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#EDEDED',
  },
  
  storeMoreDetailView: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  moreDetailLeftView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  
  },
  
  findRoadImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  
  moreDetailAddressText: {
    color: "#74798a",
  },
  
  moreDetailDistanceText: {
    color: "#2157f3"
  },
  
  topBarView: {
    width: '100%',
    position: 'absolute',
    top: 5,
    left: windowWidth * 0.5 - 25
  },
  
  topBarInnerView: {
    width: 50,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#abbdbe',
  },
  
  bottomBarView: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 3,
    left: windowWidth * 0.5 - 67
    
  },
  
  bottomBarInnerView: {
    width: 134,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#000000',
    bottom: 0,
  },
  
  topContainer: {
    backgroundColor: 'white',
  },
  
  topContainerHeaderView: {
    marginTop: 13,
    marginBottom: 13,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  topContainerHeaderViewBackImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  
  topContainerHeaderViewText: {
    fontSize: 20,
  },
  
  topContainerHeaderViewBackStarImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  
  topContainerBottomView: {
    marginTop: 13,
    marginBottom: 13,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  topContainerBottomViewLeft: {
    flexDirection: 'column',
    width: '90%',
  },
  
  topContainerBottomViewLeftAddressText: {
    fontSize: 14,
    color: "#74798a"
  },
  
  topContainerBottomViewLeftDistanceText: {
    color: "#2157f3"
  },
  
  storeAddressView: {
    marginTop: 0,
    flexDirection: 'row',
  },
  
  storeAddressViewLeft: {
    width: '87%',
  },
  
  storeAddressViewRight: {
    width: '13%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: 1
  },
  
});
