import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";

import {
  StyleSheet,
  View,
} from 'react-native';



const WinningBottomSheet = (props) =>{
  useEffect(() => {
  
  }, []);
  
  return (
    <View style={styles.container}>
    </View>
  )
};

const mapStateToProps = ({}) =>{
  return {}
};

export default connect(
  mapStateToProps,
  {}
)(WinningBottomSheet);


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderWidth: 10,
    height: '100%',
    borderColor: 'pink'
  },
});
