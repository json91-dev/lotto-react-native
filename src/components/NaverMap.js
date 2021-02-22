import React, { useEffect, useState, } from 'react';
import NaverMapView, { Circle, Marker } from 'react-native-nmap';
import { getCurrentPosition } from '../helpers/Location';

const NaverMap = () =>{
  useEffect(() => {
    getCurrentPosition().then(position => {
      const { latitude, longitude } = position;
      setCurrentLocation({
        latitude,
        longitude,
      });
    });
  }, []);
  
  const [currentLocation, setCurrentLocation] = useState({latitude: 0, longitude: 0});
  
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
      <Circle coordinate={currentLocation} color="rgba(255,0,0,0.3)" radius={30}/>
      
      <Marker coordinate={currentLocation} pinColor="red" onClick={() => this
        // console.warn('onClick! p2')
      }/>
      
      {/*<Marker*/}
        {/*coordinate={P0}*/}
      
      {/*/>*/}
      {/*<Marker*/}
        {/*coordinate={P1}*/}
        {/*pinColor="blue"*/}
      {/*/>*/}
      
      {/*<Path coordinates={[P0, P1]}/>*/}
      {/*<Polyline coordinates={[P1, P2]}/>*/}
      
      {/*<Polygon coordinates={[P0, P1, P2]} color="rgba(0, 0, 0, 0.5)"/>*/}
      
    </NaverMapView>
  );
};

export default NaverMap;
