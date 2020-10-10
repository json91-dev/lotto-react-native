import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";

import {
  FlatList, Image, SafeAreaView,
  StyleSheet, Text, TouchableOpacity,
  View,
} from 'react-native';

const SearchResult = (props) =>{
  useEffect(() => {
  
  }, []);
  const item = [{}, {}];
  
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={item}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.flatListTouch}>
              <View style={styles.flatListTouchView}>
                <Image style={styles.flatListImageLeft} source={require('../../assets/ic_time.png')} />
                <Text style={styles.flatListText}>로또 복권방</Text>
              </View>
              
              <Image style={styles.flatListImageRight} source={require('../../assets/ic_black_arrow_right.png')} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const mapStateToProps = ({}) =>{
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(SearchResult);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: '100%',
    borderColor: 'pink'
  },
  
  flatList: {
  
  },
  
  flatListTouch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 18,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 0.5,
    borderColor: '#EDEDED'
  },
  
  flatListImageLeft: {
    resizeMode: 'contain',
    width: 16,
    height: 16,
  },
  
  flatListTouchView: {
    flexDirection: 'row'
  },
  
  flatListText: {
    textAlign: 'left',
    marginLeft: 10,
  },
  
  flatListImageRight: {
    resizeMode: 'contain',
    width: 16,
    height: 16,
  }
  
});
