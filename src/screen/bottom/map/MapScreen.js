import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
 Dimensions, StatusBar, Platform } from 'react-native';

import NaverMapView, { Circle, Marker, Path, Polyline, Polygon } from 'react-native-nmap';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import LottoStoreSheetHeader from '../../../components/map/LottoStoreSheetHeader';
import LottoStoreSheetContent from '../../../components/map/LottoStoreSheetContent';
import NaverMap from '../../../components/map/NaverMap';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MapScreen = (props) => {
  useEffect(() => {
  
  }, []);
  
  // 바텀시트의 컨텐츠를 나타내는 함수.
  const renderContent = () => {
    return <LottoStoreSheetContent/>;
  };
  
  const [bottomSheetState, setBottomSheetState] = useState('bottom'); // bottom, middle, top
  
  // 바텀시트의 헤더를 나타내는 함수.
  const renderHeader = () => {
    return (
      <LottoStoreSheetHeader bottomSheetState={bottomSheetState}/>
    );
  };
  
  const P0 = { latitude: 37.564362, longitude: 126.977011 };
  const P1 = { latitude: 37.565051, longitude: 126.978567 };
  const P2 = { latitude: 37.565383, longitude: 126.976292 };
  
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
    const bottomHeaderHeight = 190;
    const bottomTabBarHeight = 60;
    
    if (Platform.OS === 'android') {
      const statusBarHeight = StatusBar.currentHeight;
      return windowHeight - (bottomHeaderHeight + bottomTabBarHeight + statusBarHeight);
    }
      return windowHeight - (bottomHeaderHeight + bottomTabBarHeight);
    
  };
  
  return (
    <View style={styles.container}>
      <NaverMap/>
      
      <View style={styles.backButtonView}>
        <TouchableOpacity style={styles.backButtonTouch} onPress={() => props.navigation.goBack()}>
          <Image style={styles.backButtonImage} source={require('../../../assets/ic_black_back_arrow.png')}/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchButtonView}>
        <TouchableOpacity style={styles.searchButtonTouch}
                          onPress={() => props.navigation.navigate('SearchStoreScreen')}>
          <Image style={styles.searchButtonImage} source={require('../../../assets/ic_black_search.png')}/>
        </TouchableOpacity>
      </View>
      
      <ScrollBottomSheet
        componentType="FlatList"
        contentContainerStyle={styles.contentContainerStyle}
        snapPoints={[0, windowHeight * 0.3 , getSheetBottomPosition()]}
        initialSnapIndex={2}
        renderHandle={() => (
          renderHeader()
        )}
        data={Array.from({ length: 1 }).map((_, i) => String(i))}
        keyExtractor={i => i}
        renderItem={({ item }) => (
          renderContent()
        )}

        onSettle={onPressBottomSheetSettle}
        />

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
    borderColor: '#EDEDED'
    
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
    borderColor: '#EDEDED'
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
  
  contentContainerStyle: {
  
  }
  
});
