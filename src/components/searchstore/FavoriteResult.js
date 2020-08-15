import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';

import {
  FlatList, Image, SafeAreaView,
  StyleSheet, Text, TouchableOpacity,
  View,
} from 'react-native';



const FavoriteResult = (props) =>{
  useEffect(() => {
  
  }, []);
  const item = [{}, {}];
  
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.searchWordFlatList}
        data={item}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity>
              <Image />
              <Text></Text>
              <Image />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
};

const mapStateToProps = ({}) =>{
  return {}
};

export default connect(
  mapStateToProps,
  {}
)(FavoriteResult);


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderWidth: 10,
    height: '100%',
    borderColor: 'pink'
  },
  
  searchWordFlatList: {
    borderWidth: 1,
  },
  
  
});
