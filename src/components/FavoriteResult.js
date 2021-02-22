import React from 'react';

import {
  FlatList, Image,
  StyleSheet, Text, TouchableOpacity,
  View,
} from 'react-native';

const FavoriteResult = (props) => {
  const item = [{}, {}];
  
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.searchWordFlatList}
        data={item}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity>
              <Image/>
              <Text/>
              <Image/>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default FavoriteResult;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderWidth: 10,
    height: '100%',
    borderColor: 'pink',
  },
  
  searchWordFlatList: {
    borderWidth: 1,
  },
  
});
