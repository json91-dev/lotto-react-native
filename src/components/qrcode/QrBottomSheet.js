import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";

import {
  StyleSheet,
  View,
} from 'react-native';



const QrBottomSheet = (props) =>{
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
)(QrBottomSheet);


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderWidth: 10,
    height: '100%',
    borderColor: 'yellow'
  },
});
