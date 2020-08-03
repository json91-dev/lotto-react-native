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

const LottoStoreSheetHeader = (props) =>{
  useEffect(() => {
  
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.storeNameText}>스파</Text>
      </View>
      
      <View style={{marginTop: 6, flexDirection: 'row'}}>
        {/*<Text>118m  |  방문  76  |  찜  1.27 </Text>*/}
        <Text style={{color: '#2157f3'}}>118m</Text>
        <Text style={{color: '#74798a'}}>  |  </Text>
        <Text style={{color: "#abbdbe"}}>방문  </Text>
        <Text>76</Text>
        <Text style={{color: '#74798a'}}>  |  </Text>
        <Text style={{color: "#abbdbe"}}>찜  </Text>
        <Text>1.27 </Text>
      </View>
  
      <View style={{marginTop: 6}}>
        <Text style={styles.storeAddressText}>서울 성북구 종암동 132 종암우림카이저팰리스 1층 101호</Text>
      </View>
      
      <TouchableOpacity style={styles.storeGuideTouch}>
        <Text style={styles.storeGuideText}>길 안내 시작</Text>
      </TouchableOpacity>
    </View>
  )
};

const mapStateToProps = ({}) =>{
  return {}
};

export default connect(
  mapStateToProps,
  {}
)(LottoStoreSheetHeader);


const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    width: '100%',
    height: '80%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  
  storeNameText: {
    fontSize: 20,
  },
  
  storeAddressText: {
    fontSize: 14,
    color: "#74798a"
  },
  
  storeGuideTouch: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#2157f3',
    marginTop: 10,
  },
  
  storeGuideText: {
    color: 'white',
  }
});
