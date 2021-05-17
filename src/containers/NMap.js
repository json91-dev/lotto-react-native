import React, { useEffect, useState, useRef, memo} from 'react';
import NaverMapView from 'react-native-nmap';
import NMarker from '../components/NMarker';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentPosition } from '../helpers/Location';
import { GET_STORES_RADIUS_REQUEST, GET_STORES_RADIUS_SUCCESS, GET_STORES_REQUEST } from '../reducers/stores';

const NMap = memo(() => {
  // state.stores를 사용하면 stores가 reducer가 바뀔때마다 리렌더링됨.
  const stores  = useSelector(state => state.stores.stores);
  const dispatch = useDispatch();
  const currentLocationRef = useRef({ latitude: 0, longitude: 0 });
  
  useEffect(() => {
    console.log('GET_STORE_RADIUS_REQUEST 호출');
    // const position = await getCurrentPosition();
    getCurrentPosition().then(position => {
      const { latitude, longitude } = position;
      const radius = 3;
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
  
  // 초기에는 nmap을 그리지 않도록 예외처리
  if (currentLocationRef.current["latitude"] === 0 && currentLocationRef.current["longitude"] === 0) {
    return null;
  }
  
  return (
    <NaverMapView
      style={{ width: '100%', height: '100%' }}
      showsMyLocationButton
      center={{ ...currentLocationRef.current, zoom: 16 }}
      // onTouch={e =>}
      // onMapClick={e => this}
      mapPadding={{ bottom: 160 }}
      logoGravity={0}
      key={+new Date()}
    >
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
