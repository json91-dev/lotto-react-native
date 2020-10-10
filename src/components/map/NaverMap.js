import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";

import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

const NaverMap = (props) =>{
  useEffect(() => {
  
  }, []);
  
  return (
    <View style={styles.container} />
  );
};

const mapStateToProps = ({}) =>{
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(NaverMap);

const styles = StyleSheet.create({

});
