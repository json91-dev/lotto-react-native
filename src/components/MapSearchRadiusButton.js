
import React, {useState, useCallback} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Animated} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentPosition } from '../helpers/Location';
import { GET_STORES_RADIUS_REQUEST } from '../reducers/stores';

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
    });
  };
  
  const onPress1kmTouch = useCallback(() => {
    fadeOut1km();
    fadeOut2km();
    fadeOut3km();
    decreateViewHeight();
    setIsListOpened(false);
    setSelectedRadius(1);
    getStoreByRadius(1);
  }, [isListOpened, selectedRadius]);
  
  const onPress2kmTouch = useCallback(() => {
    fadeOut1km();
    fadeOut2km();
    fadeOut3km();
    decreateViewHeight();
    setIsListOpened(false);
    setSelectedRadius(2);
    getStoreByRadius(2);
  }, [isListOpened, selectedRadius]);
  
  const onPress3kmTouch = useCallback(() => {
    fadeOut1km();
    fadeOut2km();
    fadeOut3km();
    decreateViewHeight();
    setIsListOpened(false);
    setSelectedRadius(3);
    getStoreByRadius(3);
  }, [isListOpened, selectedRadius]);
  
  const onPressSelectedTouch = useCallback(() => {
    fadeIn1km();
    fadeIn2km();
    fadeIn3km();
    increateViewHeight();
    setIsListOpened(true);
  }, [isListOpened]);
  
  useState(() => {
    // fadeIn1km();
    // fadeIn2km();
    // fadeIn3km();
    // increateViewHeight();
  },[]);
  
  
  
  let fontColor1km = {};
  let fontColor2km = {};
  let fontColor3km = {};
  
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
    bottom: 170,
    right: 10,
    width: 58,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    justifyContent: 'center'
  },
  
  radiusBoxViewAnimated: {
    position: 'absolute',
    bottom: 170,
    right: 10,
    width: 58,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA'
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
