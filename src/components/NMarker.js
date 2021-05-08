import NaverMapView, { Circle, Marker } from 'react-native-nmap';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { SET_CURRENT_STORE } from '../reducers/stores';

const NMarker = memo(({store}) => {
  const { longitude, latitude } = store;
  const coordinate = {
    longitude,
    latitude,
  };
  const dispatch = useDispatch();
  const stores = useSelector(state => state.stores);
  
  const [ markerWidth, setMarkerWidth ]  = useState(18);
  const [ markerHeight, setMarkerHeight ] = useState(18);
  
  useEffect(() => {
    if (stores.currentStore.id === store.id) {
      setMarkerWidth(55);
      setMarkerHeight(36);
    } else {
      setMarkerWidth(22);
      setMarkerHeight(22);
    }
  },[stores.currentStore]);
  
  const getMarkerImage = () => {
    if (stores.currentStore.id === store.id) {
      return require('../assets/ic_pin_map.png');
    } else {
      return require('../assets/ic_marker_red.png');
    }
  };
  
  const onClickMarker = (store) => () => {
    dispatch({
      type: SET_CURRENT_STORE,
      data: store,
    });
  };
  
  return (
    <Marker coordinate={coordinate}
            image={getMarkerImage()}
            width={markerWidth}
            height={markerHeight}
            onClick={onClickMarker(store)}
    />
  );
});

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
