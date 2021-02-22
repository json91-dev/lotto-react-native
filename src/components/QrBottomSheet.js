import React from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  View,
} from 'react-native';

const QrBottomSheet = () =>{
  
  return (
    <View style={styles.container} />
  );
};

const mapStateToProps = () =>{
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(QrBottomSheet);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderWidth: 10,
    height: '100%',
    borderColor: 'yellow'
  },
});
