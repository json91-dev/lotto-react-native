import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity, Image,
} from 'react-native';

const MapCurrentLocationButton = () =>{
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.currentLocationTouch}>
        <Image style={styles.currentLocationImage} source={require('../assets/ic_target.png')}/>
      </TouchableOpacity>
    </View>
  );
};

export default MapCurrentLocationButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 180,
    left: 100,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  
  currentLocationTouch: {
  
  },
  
  currentLocationImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
});
