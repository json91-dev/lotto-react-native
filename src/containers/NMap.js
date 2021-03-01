import React, { useEffect, useState } from 'react';
import NaverMapView from 'react-native-nmap';
import NMarker from '../components/NMarker';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentPosition } from '../helpers/Location';
import { GET_STORES_REQUEST } from '../reducers/stores';

const NMap = () => {
  const { stores } = useSelector(state => state.stores);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // const position = await getCurrentPosition();
    getCurrentPosition().then(position => {
      const { latitude, longitude } = position;
      setCurrentLocation({
        latitude,
        longitude,
      });
    });
    
    dispatch({
      type: GET_STORES_REQUEST,
    });
  }, []);
  
  const [currentLocation, setCurrentLocation] = useState({ latitude: 0, longitude: 0 });
  
  console.log(stores);
  return (
    <NaverMapView
      style={{ width: '100%', height: '100%' }}
      showsMyLocationButton
      center={{ ...currentLocation, zoom: 16 }}
      // onTouch={e =>}
      // onMapClick={e => this}
      mapPadding={{ bottom: 160 }}
      logoGravity={0}
    >
      {
        stores ?
          stores.map((item, index) => {
            return (
              <NMarker key={+new Date() + item.id} store={item} pinColor="red"/>
            );
          })
          : null
      }
    
    </NaverMapView>
  );
};

export default NMap;
