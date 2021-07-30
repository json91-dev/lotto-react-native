import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  Clipboard,
  SafeAreaView,
  BackHandler,
} from 'react-native';

import { useDispatch } from 'react-redux';

import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import LottoStoreSheetHeader from '../../components/LottoStoreSheetHeader';
import LottoStoreSheetContent from '../../components/LottoStoreSheetContent';
import NMap from '../../components/NMap';
import MapSearchRadiusButton from '../../components/MapSearchRadiusButton';
import { getCurrentPosition } from '../../helpers/Location';
import { GET_STORES_RADIUS_REQUEST, SET_CURRENT_STORE } from '../../reducers/stores';
import Toast from 'react-native-easy-toast';
import FindLoadBottomSheet from '../../components/FindLoadBottomSheet';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MapScreen = () => {
  const dispatch = useDispatch();
  const [isOpenedMapLinkButtons, setIsOpenedMapLinkButtons] = useState(false);
  const [showFindLoadBottomSheet, setShowFindLoadBottomSheet] = useState(false);
  const [bottomSheetState, setBottomSheetState] = useState('bottom'); // bottom, middle, top
  const toastRef = useRef();
  const exitApp = useRef(false);
  const exitTimeout = useRef();
  
  /** 맨 처음 앱이 로딩될때 현재 위치를 얻어오고 현재 위치의 반경 1km의 로또 판매점을 가져옴. **/
  useEffect(() => {
    getCurrentPosition().then(position => {
      const { latitude, longitude } = position;
      const radius = 1;
      
      // STEP 1: 선택된 로또 판매점 선택 제거
      // 혹시 앱 종료시 선택제거가 안됬을때의 방어코드이다.
      // 광고 노출을 위해서 수행되어야 함.
      dispatch({
        type: SET_CURRENT_STORE,
        data: {},
      });

      // STEP 2 : 반경 1km의 로또 판매점을 가져옴.
      dispatch({
        type: GET_STORES_RADIUS_REQUEST,
        data: {
          latitude,
          longitude,
          radius,
        }
      });
    });
    
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    
    return (() => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
  
      // 종료시 로또 판매점 선택 제거
      dispatch({
        type: SET_CURRENT_STORE,
        data: {},
      });
    });
  }, []);
  
  /** 백버튼 클릭시 2번 클릭시 앱 종료 **/
  const handleBackButton = useCallback(() => {
    // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
    if (exitApp.current === undefined || !exitApp.current) {
      toastRef.current.show('한번 더 누르시면 종료됩니다.');
      exitApp.current = true;
    
      exitTimeout.current = setTimeout(() => {
        exitApp.current = false;
        }, 2000    // 2초
      );
    } else {
      clearTimeout(exitTimeout.current);
    
      BackHandler.exitApp();  // 앱 종료
    }
    return true;
  }, []);
  
  
  /** 바텀시트의 컨텐츠 출력.**/
  const renderContent = useCallback(() => {
    return <LottoStoreSheetContent/>;
  }, []);
  
  /** 바텀시트의 헤더를 나타내는 함수. **/
  const renderHeader = useCallback(() => {
    return (
      <LottoStoreSheetHeader
        bottomSheetState={bottomSheetState}
        setIsOpenedMapLinkButtons={setIsOpenedMapLinkButtons}
        copyClipboard={copyClipboard}
        setShowFindLoadBottomSheet={setShowFindLoadBottomSheet}
      />
    );
  }, []);
  
  /** 주소 복사 Toast 메세지 출력 **/
  const showCopyToast = useCallback(() => {
    toastRef.current.show('주소가 복사되었습니다.');
  }, []);
  
  /** Clipboard에 텍스트 저장 및 Toast 출력 **/
  const copyClipboard = (text) => {
    Clipboard.setString(text);
    showCopyToast();
  };
  
  
  /** 현재 BottomSheet의 상태를 반환하고 bottomSheetState를 업데이트하는 함수 **/
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
    const bottomHeaderHeight = 136;
    const bottomTabBarHeight = 0;
    
    if (Platform.OS === 'android') {
      const statusBarHeight = StatusBar.currentHeight;
      return windowHeight - (bottomHeaderHeight + bottomTabBarHeight + statusBarHeight);
    }
    return windowHeight - (bottomHeaderHeight + bottomTabBarHeight);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <NMap/>
      <MapSearchRadiusButton />
      
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
  
  
      <Toast ref={toastRef}
             positionValue={windowHeight * 0.55}
             fadeInDuration={200}
             fadeOutDuration={1000}
             style={{backgroundColor:'rgba(33, 87, 243, 0.5)'}}
      />
  
      {showFindLoadBottomSheet
        ? <FindLoadBottomSheet setShowFindLoadBottomSheet={setShowFindLoadBottomSheet} copyClipboard={copyClipboard}/>
        : null
      }
      
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
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
