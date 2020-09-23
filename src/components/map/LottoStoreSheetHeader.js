import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

const dummy = {
  visit: 76,
  favorite: 127,
  address: '서울 성북구 종암동 132 종암우림카이저팰리서 1층 101호',
  distance: 118,
};


const LottoStoreSheetHeader = (props) =>{
  useEffect(() => {
  
  }, []);
  // top인 경우
  // middle인 경우
  // bottom인 경우
  console.log(props.bottomSheetState);
  
  switch(props.bottomSheetState) {
    
    case 'bottom': {
      return (
        <View style={styles.bottomContainer}>
          <View style={styles.storeTitleView}>
            <Text style={styles.storeNameText}>스파</Text>
            <TouchableOpacity>
              <Image style={styles.favoriteImage} source={require('../../assets/ic_favorite_star.png')}/>
            </TouchableOpacity>
          </View>
    
          <View style={styles.storeDetailView}>
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
      );
    }
  
    case 'middle': {
      return (
        <View style={styles.middleContainer}>
          <View style={[styles.storeTitleView, {paddingLeft: 20, paddingRight: 20}]}>
            <Text style={styles.storeNameText}>스파</Text>
            <TouchableOpacity>
              <Image style={styles.favoriteImage} source={require('../../assets/ic_favorite_star.png')}/>
            </TouchableOpacity>
          </View>
          
          <View style={[styles.storeDetailView, {paddingLeft: 20, paddingRight: 20}]}>
            {/*<Text>118m  |  방문  76  |  찜  1.27 </Text>*/}
            <Text style={{color: "#abbdbe"}}>방문  </Text>
            <Text>76</Text>
            <Text style={{color: '#74798a'}}>  |  </Text>
            <Text style={{color: "#abbdbe"}}>찜  </Text>
            <Text>1.27 </Text>
          </View>
          
          <View style={styles.divider}></View>
          
          <View style={styles.storeMoreDetailView}>
            <View style={styles.moreDetailLeftView}>
              <Text style={styles.moreDetailAddressText}>서울 성북구 종암동 132 종암우림카이저팰리스 1층</Text>
              <Text style={styles.moreDetailDistanceText}>418m</Text>
            </View>
            <TouchableOpacity>
              <Image style={styles.findRoadImage} source={require('../../assets/ic_find_road.png')}/>
            </TouchableOpacity>
          </View>
          
        </View>
      )
    }
  
    case 'top': {
      return null
    }
  }
  
};

LottoStoreSheetHeader.propTypes = {
  bottomSheetState: PropTypes.oneOf(['bottom', 'middle', 'top'])
};

const mapStateToProps = ({}) =>{
  return {}
};

export default connect(
  mapStateToProps,
  {}
)(LottoStoreSheetHeader);


const styles = StyleSheet.create({
  // 최하단의 바텀시트
  bottomContainer: {
    marginTop: 7,
    width: '100%',
    height: '80%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  
  storeTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  favoriteImage: {
    width: 20,
    height: 20,
  },
  
  storeNameText: {
    fontSize: 20,
  },
  
  storeDetailView: {
    marginTop: 6,
    flexDirection: 'row'
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
  },
  
  // 중단의 바텀시트
  middleContainer: {
    marginTop: 7,
    width: '100%',
    height: '80%',

  },
  
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#EDEDED',
    marginTop: '3%',
    marginBottom: '3%'
  },
  
  storeMoreDetailView: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  moreDetailLeftView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  
  },
  
  findRoadImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  
  moreDetailAddressText: {
    color: "#74798a"
  },
  
  moreDetailDistanceText: {
    color: "#2157f3"
  },
  
});
