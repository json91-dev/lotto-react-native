import NaverMapView, { Circle, Marker } from 'react-native-nmap';
import React from 'react';
import PropTypes from 'prop-types'

const NMarker = ({store}) => {
  
  const { longitude, latitude } = store;
  const coordinate = {
    longitude,
    latitude,
  };
  
  console.log('NMAP 호출');
  
  return (
    <Marker coordinate={coordinate} pinColor="red"
    />
  );
};

NMarker.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    address_new: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    region1: PropTypes.string.isRequired,
    region2: PropTypes.string.isRequired,
    storetype: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    distance: PropTypes.number,
  }).isRequired,
};

export default NMarker;
