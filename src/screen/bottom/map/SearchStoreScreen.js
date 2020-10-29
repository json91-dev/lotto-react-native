import React, {Component, useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';

import FavoriteResult from '../../../components/searchstore/FavoriteResult';
import SearchResult from '../../../components/searchstore/SearchResult';
import Toast from 'react-native-easy-toast';

const SearchStoreScreen = (props) => {
  const [tabViewIndex, setTabViewIndex] = useState(0);
  
  useEffect(() => {
  
  }, []);
  
  const onTabViewIndexChange = (index) => () => {
    setTabViewIndex(index);
  };
  
  const TabViewHeader = () => {
    if (tabViewIndex === 0) {
      return (
        <View style={styles.tabViewHeaderView}>
          <TouchableOpacity style={styles.tabViewHeaderItemFocused} onPress={onTabViewIndexChange(0)}>
            <Text>최근 검색</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabViewHeaderItem} onPress={onTabViewIndexChange(1)}>
            <Text>즐겨찾기</Text>
          </TouchableOpacity>
        </View>
      );
    }
      return (
        <View style={styles.tabViewHeaderView}>
          <TouchableOpacity style={styles.tabViewHeaderItem} onPress={onTabViewIndexChange(0)}>
            <Text>최근 검색</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabViewHeaderItemFocused} onPress={onTabViewIndexChange(1)}>
            <Text>즐겨찾기</Text>
          </TouchableOpacity>
        </View>
      );
    
  };
  
  const TabViewContent = () => {
    if (tabViewIndex === 0) {
      return <SearchResult/>;
    }
      return <FavoriteResult/>;
    
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchWordView}>
        <Image style={styles.searchWordImage} source={require('../../../assets/ic_back_arrow.png')} />
        <TextInput style={styles.searchWordTextInput} placeholder="검색어를 입력해주세요." />
      </View>
      <TabViewHeader/>
      <TabViewContent/>
    </SafeAreaView>
  );
};

export default SearchStoreScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  
  searchWordView: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 20,
  },
  
  searchWordTextInput: {
    width: '90%',
    paddingLeft: 15,
  },
  
  searchWordImage: {
    resizeMode: 'cover',
    width: 25,
    height: 22,
  },
  
  tabViewHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  tabViewHeaderItemFocused: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#1534EF'
  },
  
  tabViewHeaderItem: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.7,
    borderColor: '#EDEDED'
  },
  
});
