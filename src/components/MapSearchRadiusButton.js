import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Animated} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentPosition } from '../helpers/Location';
import { GET_STORES_RADIUS_REQUEST, SET_CURRENT_RADIUS } from '../reducers/stores';
import { SET_MAP_TOUCH } from '../reducers/map';

const viewHeightAnim = new Animated.Value(40);
const fadeAnim1km = new Animated.Value(0);
const fadeAnim2km = new Animated.Value(0);
const fadeAnim3km = new Animated.Value(0);

const increateViewHeight = () => {
  Animated.timing(
    viewHeightAnim,
    {
      toValue: 108,
      duration: 200
    }
  ).start();
};

const decreateViewHeight = () => {
  Animated.timing(
    viewHeightAnim,
    {
      toValue: 40,
      duration: 200
    }
  ).start();
};

const fadeIn1km = () => { // opacity: 0 => 1
  Animated.timing(fadeAnim1km, {
    toValue: 1,
    duration: 200
  }).start();
};

const fadeOut1km = () => { // opacity: 1 => 0
  Animated.timing(fadeAnim1km, {
    toValue: 0,
    duration: 200
  }).start();
};

const fadeIn2km = () => { // opacity: 0 => 1
  Animated.timing(fadeAnim2km, {
    toValue: 1,
    duration: 200
  }).start();
};

const fadeOut2km = () => { // opacity: 1 => 0
  Animated.timing(fadeAnim2km, {
    toValue: 0,
    duration: 200
  }).start();
};

const fadeIn3km = () => { // opacity: 0 => 1
  Animated.timing(fadeAnim3km, {
    toValue: 1,
    duration: 200
  }).start();
};

const fadeOut3km = () => { // opacity: 1 => 0
  Animated.timing(fadeAnim3km, {
    toValue: 0,
    duration: 200
  }).start();
};

const MapSearchRadiusButton = () => {
  const [isListOpened, setIsListOpened] = useState(false);
  const [selectedRadius, setSelectedRadius] = useState(1);
  const dispatch = useDispatch();
  const isMapTouch = useSelector(state => state.map.isMapTouch);
  
  const getStoreByRadius = (radius) => {
    getCurrentPosition().then(position => {
      const { latitude, longitude } = position;
      
      dispatch({
        type: GET_STORES_RADIUS_REQUEST,
        data: {
          latitude,
          longitude,
          radius,
        }
      });
  
      dispatch({
        type: SET_CURRENT_RADIUS,
        data: radius,
      });
    });
  };
  
  // km 리스트를 여는 함수.
  const openListButton = () => {
    fadeIn1km();
    fadeIn2km();
    fadeIn3km();
    increateViewHeight();
    setIsListOpened(true);
    dispatch({ type: SET_MAP_TOUCH, data: false });
  };
  
  // km 리스트를 닫는 함수.
  const closeListButton = () => {
    if (isListOpened) {
      fadeOut1km();
      fadeOut2km();
      fadeOut3km();
      decreateViewHeight();
      setIsListOpened(false);
    }
  };
  
  // map에 Touch이벤트 발생시 km 리스트를 닫음
  useEffect(() => {
    if (isMapTouch) {
      closeListButton();
    }
  }, [isMapTouch]);
  
  // 1km 선택시 km 리스트를 닫고 반경 1km로 판매점 검색
  const onPress1kmTouch = useCallback(() => {
    closeListButton();
    setSelectedRadius(1);
    getStoreByRadius(1);
  }, [isListOpened, selectedRadius]);
  
  // 2km 선택시 km 리스트를 닫고 반경 2km로 판매점 검색
  const onPress2kmTouch = useCallback(() => {
    closeListButton();
    setSelectedRadius(2);
    getStoreByRadius(2);
  }, [isListOpened, selectedRadius]);
  
  // 3km 선택시 km 리스트를 닫고 반경 3km로 판매점 검색
  const onPress3kmTouch = useCallback(() => {
    closeListButton();
    setSelectedRadius(3);
    getStoreByRadius(3);
  }, [isListOpened, selectedRadius]);
  
  const onPressSelectedTouch = useCallback(() => {
    openListButton();
  }, [isListOpened]);
  
  const fontColor1km = {};
  const fontColor2km = {};
  const fontColor3km = {};
  
  switch (selectedRadius) {
    case 1:
      fontColor1km.color = '#2157f3';
      fontColor2km.color = '#3b3f4a';
      fontColor3km.color = '#3b3f4a';
      break;
    case 2:
      fontColor1km.color = '#3b3f4a';
      fontColor2km.color = '#2157f3';
      fontColor3km.color = '#3b3f4a';
      break;
    case 3:
      fontColor1km.color = '#3b3f4a';
      fontColor2km.color = '#3b3f4a';
      fontColor3km.color = '#2157f3';
      break;
    default:
      fontColor1km.color = '#3b3f4a';
      fontColor2km.color = '#3b3f4a';
      fontColor3km.color = '#3b3f4a';
      break;
  }
  
  return (
    <Animated.View style={[styles.radiusBoxView, {
      height: viewHeightAnim,
    }]}
    >
      {isListOpened?
        <View>
          <TouchableOpacity style={styles.radiusBoxTouch} onPress={onPress1kmTouch}>
            <Animated.Text style={[styles.radiusBoxText, {
              opacity: fadeAnim1km,
            }, fontColor1km]}>1km</Animated.Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radiusBoxTouch} onPress={onPress2kmTouch}>
            <Animated.Text style={[styles.radiusBoxText, {
              opacity: fadeAnim2km,
            }, fontColor2km]}>2km</Animated.Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radiusBoxTouch} onPress={onPress3kmTouch}>
            <Animated.Text style={[styles.radiusBoxText, {
              opacity: fadeAnim3km,
            }, fontColor3km]}>3km</Animated.Text>
          </TouchableOpacity>
        </View>
        :
        <View>
          <TouchableOpacity style={[styles.selectedRadiusBoxTouch]} onPress={onPressSelectedTouch}>
            <Text style={styles.radiusBoxText}>{selectedRadius}km</Text>
          </TouchableOpacity>
        </View>
      }
    </Animated.View>
  );
};

export default MapSearchRadiusButton;

const styles = StyleSheet.create({
  radiusBoxView: {
    position: 'absolute',
    bottom: 151,
    right: 10,
    width: 58,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    justifyContent: 'center'
  },
  
  radiusBoxTouch: {
    width: '100%',
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  selectedRadiusBoxTouch: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  radiusBoxText: {
    color: "#2157f3"
  }
});
