import React, { useEffect, useRef, memo, useCallback } from 'react';
import { Platform } from 'react-native';
import NaverMapView,  { Circle } from 'react-native-nmap';
import { useSelector, useDispatch } from 'react-redux';
import NMarker from './NMarker';
import { getCurrentPosition } from '../helpers/Location';
import { GET_STORES_RADIUS_REQUEST } from '../reducers/stores';
import { SET_MAP_TOUCH } from '../reducers/map';

const NMap = memo(() => {
  const stores  = useSelector(state => state.stores.stores); // state.stores를 사용하면 stores가 reducer가 바뀔때마다 리렌더링됨.
  const currentRadius = useSelector(state => state.stores.currentRadius); // 지도 현재 반경.
  const dispatch = useDispatch(); //
  const currentLocationRef = useRef({ latitude: 0, longitude: 0 }); // 지도 현재 위치
  
  // console.log(`[${Platform.OS}] nmapView 호출`);
  // Nmap이 처음 렌더링될때 반경 1km내의 상점 정보를 가져옴.
  useEffect(() => {
    console.log('GET_STORE_RADIUS_REQUEST 호출');
    // const position = await getCurrentPosition();
    getCurrentPosition().then(position => {
      const { latitude, longitude } = position;
      const radius = 1;
      currentLocationRef.current = {latitude, longitude};
      
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
  
  // 현재 반경에 따라 zoom level을 설정함.
  const getZoom = useCallback(() => {
    switch (currentRadius) {
      case 1:
        return 14;
      case 2:
        return 13;
      case 3:
        return 12;
      default:
        return 14;
    }
  },[currentRadius]);
  
  // 지도에 터치 이벤트 호출시 수행되는 함수.
  const onMapTouch = () => {
    dispatch({ type: SET_MAP_TOUCH, data: true });
  };
  
  const getMapPaddingByOs = () => {
    if (Platform.OS === 'android') {
      return 105;
    }
    
    return 75;
  };
  
  // 초기에는 nmap을 그리지 않도록 예외처리
  if (currentLocationRef.current.latitude === 0 && currentLocationRef.current.longitude === 0) {
    return null;
  }
  
  return (
    <NaverMapView
      style={{ width: '100%', height: '100%' }}
      showsMyLocationButton
      locationTrackingMode={1}
      center={{ ...currentLocationRef.current, zoom: getZoom()}}
      onTouch={onMapTouch}
      // onMapClick={onMapClick}
      mapPadding={{ bottom: getMapPaddingByOs() }}
      logoGravity={1}
      key={+new Date()}
    >
      <Circle
        coordinate={currentLocationRef.current}
        color="rgba(33, 87, 243, 0.15)"
        radius={1000 * currentRadius}
        outlineWidth={10}
        outlineColor="rgba(0,0,255,0)"
      />
      
      {
        stores ?
          stores.map((item) => {
            return (
              <NMarker key={+new Date() + item.id + Math.random()} store={item} />
            );
          })
          : null
      }
    
    </NaverMapView>
  );
});

export default NMap;
