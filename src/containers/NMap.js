import React, { useEffect, useState, useRef, memo, useCallback} from 'react';
import NaverMapView, { Circle, Marker } from 'react-native-nmap';
import { useSelector, useDispatch } from 'react-redux';
import NMarker from '../components/NMarker';
import { getCurrentPosition } from '../helpers/Location';
import { GET_STORES_RADIUS_REQUEST, GET_STORES_RADIUS_SUCCESS, GET_STORES_REQUEST } from '../reducers/stores';
import {Platform} from 'react-native';

const NMap = memo(() => {
  // state.stores를 사용하면 stores가 reducer가 바뀔때마다 리렌더링됨.
  const stores  = useSelector(state => state.stores.stores);
  const currentRadius = useSelector(state => state.stores.currentRadius);
  
  const dispatch = useDispatch();
  const currentLocationRef = useRef({ latitude: 0, longitude: 0 });
  console.log(`[${Platform.OS}] nmapView 호출`);
  
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
  
  console.log(getZoom());
  
  // 초기에는 nmap을 그리지 않도록 예외처리
  if (currentLocationRef.current.latitude === 0 && currentLocationRef.current.longitude === 0) {
    return null;
  }
  
  return (
    <NaverMapView
      style={{ width: '100%', height: '100%' }}
      showsMyLocationButton
      center={{ ...currentLocationRef.current, zoom: getZoom()}}
      // onTouch={e =>}
      // onMapClick={e => this}
      mapPadding={{ bottom: 130 }}
      logoGravity={0}
      key={+new Date()}
    >
      <Circle
        coordinate={currentLocationRef.current}
        color="rgba(255,0,0,0.1)"
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
