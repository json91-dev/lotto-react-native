import React, { useEffect, useRef, memo, useCallback, useState } from 'react';
import { Platform } from 'react-native';
import NaverMapView,  { Circle } from 'react-native-nmap';
import { useSelector, useDispatch } from 'react-redux';
import NMarker from './NMarker';
import { SET_MAP_TOUCH } from '../reducers/map';
import { getCurrentPosition } from '../helpers/Location';
import { GET_STORES_RADIUS_REQUEST, SET_CURRENT_STORE } from '../reducers/stores';

const NMap = memo(() => {
  const stores  = useSelector(state => state.stores.stores); // state.stores를 사용하면 stores가 reducer가 바뀔때마다 리렌더링됨.
  
  const currentLongitude = useSelector(state => state.stores.currentLongitude);
  const currentLatitude = useSelector(state => state.stores.currentLatitude);
  const currentRadius = useSelector(state => state.stores.currentRadius); // 지도 현재 반경.
  const locationTrackingMode = useRef(0);
  const dispatch = useDispatch();
  
  console.log('Nmap: 리렌더링');
  
  useEffect(() => {
    console.log('Nmap: useEffect');
    
    getCurrentPosition().then(position => {
      const radius = 1;
      
      /** 위치정보를 얻어왔을때 **/
      if (position) {
        // STEP 2 : 반경 1km의 로또 판매점을 가져옴.
        dispatch({
          type: GET_STORES_RADIUS_REQUEST,
          data: {
            latitude: position.latitude,
            longitude: position.longitude,
            radius,
          }
        });
        locationTrackingMode.current = 1;
      }
      
      /** 위치정보를 못얻어왔을때 **/
      else {
        console.log('호출 222');
        locationTrackingMode.current = 0;
  
        /** 주소를 못알아 왔을시 서울역의 좌표를 지도에 표시 **/
        dispatch({
          type: GET_STORES_RADIUS_REQUEST,
          data: {
            latitude: 37.555615,
            longitude: 126.9693655,
            radius,
          }
        });
      }
  
      /**
       * 선택된 로또 판매점 선택 제거, 혹시 앱 종료시 선택제거가 안됬을때의 방어코드이다.
       * 광고 노출을 위해서 수행되어야 함.
       */
      dispatch({
        type: SET_CURRENT_STORE,
        data: {},
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
  

  return (
    <NaverMapView
      style={{ width: '100%', height: '100%' }}
      showsMyLocationButton
      locationTrackingMode={locationTrackingMode.current}
      center={{ ...{latitude: currentLatitude, longitude: currentLongitude}, zoom: getZoom()}}
      onTouch={onMapTouch}
      // onMapClick={onMapClick}
      mapPadding={{ bottom: getMapPaddingByOs() }}
      logoGravity={1}
      key={+new Date()}
    >
      <Circle
        coordinate={{latitude: currentLatitude, longitude: currentLongitude}}
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
