import React, { useEffect, useState, useRef, memo} from 'react';
import NMarker from '../components/NMarker';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
} from 'react-native';

const NMarkerList = () => {
  // state.stores를 사용하면 stores가 reducer가 바뀔때마다 리렌더링됨.
  const stores  = useSelector(state => state.stores.stores);
  
  return (
    <>
      {
        stores ?
          stores.map((item) => {
            return (
              <NMarker key={+new Date() + item.id + Math.random()} store={item} />
            );
          })
          : null
      }
    </>
  );
};

export default NMarkerList;
