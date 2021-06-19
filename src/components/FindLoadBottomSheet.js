import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const FindLoadBottomSheet = () =>{
  return (
    <View style={styles.container}></View>
  );
};

export default FindLoadBottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'blue',
    borderWidth: 10,
    height: 210,
    borderColor: 'pink',
  },
});
