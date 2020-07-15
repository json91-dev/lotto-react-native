import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';



const LottoDetail = (props) =>{
  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>

    </View>
  )
};

const mapStateToProps = ({}) =>{
  return {

  }
};

export default connect(
  mapStateToProps,
  {}
)(LottoDetail);


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 11,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
