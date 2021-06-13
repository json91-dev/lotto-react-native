import React, { useEffect, useRef, useState, } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions, StatusBar, Platform,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import LottoStoreSheetHeader from '../../components/LottoStoreSheetHeader';
import LottoStoreSheetContent from '../../components/LottoStoreSheetContent';
import NMap from '../../containers/NMap';
import MapLinkButtonsComponent from '../../components/MapLinkButtonsComponent';
import MapSearchRadiusButton from '../../components/MapSearchRadiusButton';
import { getCurrentPosition } from '../../helpers/Location';
import { GET_STORES_RADIUS_REQUEST } from '../../reducers/stores';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MapScreen = (props) => {
  const dispatch = useDispatch();
  const [isOpenedMapLinkButtons, setIsOpenedMapLinkButtons] = useState(false);
  const mapSearchRadiusButtonRef = useRef();
  
  useEffect(() => {
    setTimeout(() => {
      console.log(mapSearchRadiusButtonRef);
    }, 2000);
    
    getCurrentPosition().then(position => {
      const { latitude, longitude } = position;
      const radius = 1;

      dispatch({
        type: GET_STORES_RADIUS_REQUEST,
        data: {
          latitude,
          longitude,
          radius,
        }
      });
    });
  
  }, []);
  
  // 바텀시트의 컨텐츠를 나타내는 함수.
  const renderContent = () => {
    return <LottoStoreSheetContent/>;
  };
  
  const [bottomSheetState, setBottomSheetState] = useState('bottom'); // bottom, middle, top
  
  // 바텀시트의 헤더를 나타내는 함수.
  const renderHeader = () => {
    return (
      <LottoStoreSheetHeader
        bottomSheetState={bottomSheetState}
        setIsOpenedMapLinkButtons={setIsOpenedMapLinkButtons}/>
    );
  };
  
  // 현재 BottomSheet의 상태를 반환하고 bottomSheetState를 업데이트하는 함수
  const onPressBottomSheetSettle = (state) => {
    switch (state) {
      case 0:
        setBottomSheetState('top');
        break;
      case 1:
        setBottomSheetState('middle');
        break;
      case 2:
        setBottomSheetState('bottom');
        break;
      default:
        break;
    }
  };
  
  /**
   * 바텀시트의 하단 snappoint를 구하기 위한 function.
   * : statusBar : 상단 헤더
   * : bottomTabBarHeight : 바텀 탭의 헤더
   * : 윈도우의 Height에서 바텀탭의 헤더와 바텀시트의 높이를 빼준 높이를 snappoint로 지정한다.
   * : 안드로이드일떄는 statusBarHeight도 추가하여 빼줘야 정상적으로 동작한다.
   */
  const getSheetBottomPosition = () => {
    const bottomHeaderHeight = 160;
    const bottomTabBarHeight = 0;
    
    if (Platform.OS === 'android') {
      const statusBarHeight = StatusBar.currentHeight;
      return windowHeight - (bottomHeaderHeight + bottomTabBarHeight + statusBarHeight);
    }
    return windowHeight - (bottomHeaderHeight + bottomTabBarHeight);
  };
  
  return (
    <View style={styles.container}>
      <NMap/>
      <MapSearchRadiusButton ref={mapSearchRadiusButtonRef.current}/>
      <ScrollBottomSheet
        componentType="FlatList"
        contentContainerStyle={styles.contentContainerStyle}
        snapPoints={[getSheetBottomPosition(), getSheetBottomPosition(), getSheetBottomPosition()]}
        initialSnapIndex={2}
        renderHandle={() => (
          renderHeader()
        )}
        data={Array.from({ length: 1 }).map((_, i) => String(i))}
        keyExtractor={i => i}
        renderItem={({ item }) => (
          renderContent()
        )}
        // onSettle={onPressBottomSheetSettle} // 추후 Scroll 바텀시트 구현시 사용
      />
  
      
      {/* 맵 링크 버튼 : deprecated */}
      {/* {isOpenedMapLinkButtons */}
      {/* ? <MapLinkButtonsComponent setIsOpenedMapLinkButtons={setIsOpenedMapLinkButtons}/> */}
      {/*: null */}
      {/* } */}
      {/* <View style={styles.backButtonView}> */}
      {/* <TouchableOpacity style={styles.backButtonTouch} onPress={() => props.navigation.goBack()}> */}
      {/* <Image style={styles.backButtonImage} source={require('../../assets/ic_black_back_arrow.png')}/> */}
      {/* </TouchableOpacity> */}
      {/* </View> */}
      {/* <View style={styles.searchButtonView}> */}
      {/* <TouchableOpacity style={styles.searchButtonTouch} */}
      {/* onPress={() => props.navigation.navigate('SearchStoreScreen')}> */}
      {/* <Image style={styles.searchButtonImage} source={require('../../assets/ic_black_search.png')}/> */}
      {/* </TouchableOpacity> */}
      {/* </View> */}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  
  /* 상단 버튼 */
  
  backButtonView: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  
  backButtonTouch: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#EDEDED',
    
  },
  
  backButtonImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  
  searchButtonView: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  
  searchButtonTouch: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  
  searchButtonImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  
  /* 바텀 시트 */
  sheetHeaderView: {
    width: '100%',
    height: 180,
    borderWidth: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  
  contentContainerStyle: {},
  
});
