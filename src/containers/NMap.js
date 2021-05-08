import React, { useEffect, useState, memo} from 'react';
import NaverMapView from 'react-native-nmap';
import NMarker from '../components/NMarker';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentPosition } from '../helpers/Location';
import { GET_STORES_RADIUS_REQUEST, GET_STORES_RADIUS_SUCCESS, GET_STORES_REQUEST } from '../reducers/stores';

const NMap = memo(() => {
  // state.stores를 사용하면 stores가 reducer가 바뀔때마다 리렌더링됨.
  const stores  = useSelector(state => state.stores.stores);
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log('GET_STORE_RADIUS_REQUEST 호출');
    // const position = await getCurrentPosition();
    getCurrentPosition().then(position => {
      const { latitude, longitude } = position;
      const radius = 3;
      setCurrentLocation({
        latitude,
        longitude,
      });
      
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
  
  /** TODO: Nmap 리렌더링 막기 (앱 로딩시 3회 이상 호출됨.) **/
  console.log('Nmap 호출');
  
  const [currentLocation, setCurrentLocation] = useState({ latitude: 0, longitude: 0 });
  
  return (
    <NaverMapView
      style={{ width: '100%', height: '100%' }}
      showsMyLocationButton
      center={{ ...currentLocation, zoom: 16 }}
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
