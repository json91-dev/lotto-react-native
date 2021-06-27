import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import { useSelector } from 'react-redux';
import { isIphoneX } from 'react-native-iphone-x-helper';
import PropTypes from 'prop-types';

const windowWidth = Dimensions.get('window').width;

const FindLoadBottomSheet = (props) =>{
  const { setShowFindLoadBottomSheet, copyClipboard } = props;
  const currentLatitude = useSelector(state => state.stores.currentLatitude);
  const currentLongitude = useSelector(state => state.stores.currentLongitude);
  
  const currentStore = useSelector(state => state.stores.currentStore);
  const storeLatitude = currentStore.latitude;
  const storeLongitude = currentStore.longitude;
  const storeAddress = currentStore.address;
  
  const onPressCancelTouch = useCallback(() => {
    setShowFindLoadBottomSheet(false);
  }, []);
  
  const onPressCopy = useCallback(() => {
    copyClipboard(storeAddress);
  }, [currentStore]);
  
  const onPressKakaoMap = useCallback(() => {
    // Check: 카카오맵도 차량경로를 안내해야 할지
    const url = `kakaomap://route?sp=${currentLatitude},${currentLongitude}&ep=${storeLatitude},${storeLongitude}&by=CAR`;
    Linking.openURL(url);
  }, [currentStore, currentLatitude, currentLongitude]);
  
  // Kakao 네비기능 현재 구현 X
  // const onPressKakaoNavi = useCallback(() => {
  //   const url = `kakaonavi://route?sX=${currentLongitude}&sY=${currentLatitude}&x=${storeLongitude}&y=${storeLatitude}`;
  //   // const url = `daummaps://search?q=${encodeURI(storeAddress)}&p=${storeLongitude},${storeLongitude}`
  //   Linking.openURL(url);
  // }, [currentStore, currentLatitude, currentLongitude]);
  
  const onPressNaverMap = useCallback(() => {
    const url = `nmap://route/car?slat=${currentLongitude}&slng=${currentLongitude}&dlat=${storeLatitude}&dlng=${storeLongitude}&dname=${encodeURI(storeAddress)}`;
    Linking.openURL(url);
  }, [currentStore, currentLatitude, currentLongitude]);
  
  const onPressTmap = useCallback(() => {
    const url = `tmap://route?goalx=${storeLongitude}6&goaly=${storeLatitude}`;
    Linking.openURL(url);
  }, [currentStore, currentLatitude, currentLongitude]);
  
  return (
    <View style={styles.container}>
      <View style={styles.topBarView}>
        <View style={styles.topBarInnerView} />
      </View>
      
      <View style={styles.titleView}>
        <Text style={styles.titleText}>가든 파이브점</Text>
        <TouchableOpacity style={styles.cancelTouch} onPress={onPressCancelTouch}>
          <Image style={styles.cancelTouchImage} source={require('../assets/ic_cancel.png')}/>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.subTitleText} numberOfLines={1} ellipsizeMode="tail">서울 성북구 종암동 132 종암우림카이저펠리1층</Text>
      
      <View style={styles.linkView}>
        <TouchableOpacity style={styles.linkTouch} onPress={onPressCopy}>
          <Image style={styles.linkTouchImage} source={require('../assets/ic_copy_btn.png')}/>
          <Text style={styles.linkTouchText}>주소 복사</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.linkTouch} onPress={onPressKakaoMap}>
          <Image style={styles.linkTouchImage} source={require('../assets/ic_kakao_map.png')}/>
          <Text style={styles.linkTouchText}>카카오맵</Text>
        </TouchableOpacity>
  
        {/*<TouchableOpacity style={styles.linkTouch} onPress={onPressKakaoNavi}>*/}
          {/*<Image style={styles.linkTouchImage} source={require('../assets/ic_kakao_navi.png')}/>*/}
          {/*<Text style={styles.linkTouchText}>카카오내비</Text>*/}
        {/*</TouchableOpacity>*/}
  
        <TouchableOpacity style={styles.linkTouch} onPress={onPressNaverMap}>
          <Image style={styles.linkTouchImage} source={require('../assets/ic_naver_map.png')}/>
          <Text style={styles.linkTouchText}>네이버 지도</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.linkTouch} onPress={onPressTmap}>
          <Image style={styles.linkTouchImage} source={require('../assets/ic_tmap.png')}/>
          <Text style={styles.linkTouchText}>티맵</Text>
        </TouchableOpacity>
      </View>
  
      { !isIphoneX() ? // iPhoneX 일때는 하단선을 표시하지 않음
        <View style={styles.bottomBarView}>
          <View style={styles.bottomBarInnerView} />
        </View>
        : null
      }
    </View>
  );
};

FindLoadBottomSheet.propTypes = {
  setShowFindLoadBottomSheet: PropTypes.func.isRequired,
  copyClipboard: PropTypes.func.isRequired,
};

export default FindLoadBottomSheet;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    height: 181,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    position: 'absolute',
    bottom: 0,
    borderColor: 'pink',
    flexDirection: 'column',
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
  
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 19,
    
  },
  
  titleText: {
    fontSize: 20,
  },
  
  cancelTouch: {
    width: 20,
    height: 20,
  },
  
  cancelTouchImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  
  subTitleText: {
    marginTop: 6,
    fontSize: 14,
    color: "#74798a"
  },
  
  linkView: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  
  linkTouch: {
    alignItems: 'center'
    
  },
  
  linkTouchImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  
  linkTouchText: {
    marginTop: 6,
    fontSize: 12,
    color: "#abbdbe"
  }
});
