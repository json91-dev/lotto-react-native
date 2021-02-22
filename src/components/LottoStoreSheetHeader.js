import React, {Component, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const LottoStoreSheetHeader = (props) => {
  
  const { setIsOpenedMapLinkButtons } = props;
  
  switch(props.bottomSheetState) {
    case 'bottom': {
      return (
        <View style={styles.bottomContainer}>
          <View style={styles.topBarView}>
            <View style={styles.topBarInnerView} />
          </View>
          
          <View style={styles.storeTitleView}>
            <Text style={styles.storeNameText}>스파</Text>
            <TouchableOpacity>
              <Image style={styles.favoriteImage} source={require('../assets/ic_favorite_star.png')}/>
            </TouchableOpacity>
          </View>
          
          <View style={styles.storeDetailView}>
            {/* <Text>118m  |  방문  76  |  찜  1.27 </Text> */}
            <Text style={{color: '#2157f3'}}>118m</Text>
            <Text style={{color: '#74798a'}}>  |  </Text>
            <Text style={{color: '#abbdbe'}}>방문  </Text>
            <Text>76</Text>
            <Text style={{color: '#74798a'}}>  |  </Text>
            <Text style={{color: "#abbdbe"}}>찜  </Text>
            <Text>1.27 </Text>
          </View>
          
          <View style={{marginTop: 6}}>
            <Text style={styles.storeAddressText}>서울 성북구 종암동 132 종암우림카이저팰리스 1층 101호</Text>
          </View>
          
          <TouchableOpacity style={styles.storeGuideTouch} onPress={()=> setIsOpenedMapLinkButtons(true)}>
            <Text style={styles.storeGuideText}>길 안내 시작</Text>
          </TouchableOpacity>
          
          <View style={styles.bottomBarView}>
            <View style={styles.bottomBarInnerView} />
          </View>
        </View>
      );
    }
  
    case 'middle': {
      return (
        <View style={styles.middleContainer}>
          <View style={styles.topBarView}>
            <View style={styles.topBarInnerView} />
          </View>
          
          <View style={[styles.storeTitleView, {paddingLeft: 20, paddingRight: 20}]}>
            <Text style={styles.storeNameText}>스파</Text>
            <TouchableOpacity>
              <Image style={styles.favoriteImage} source={require('../assets/ic_favorite_star.png')}/>
            </TouchableOpacity>
          </View>
          
          <View style={[styles.storeDetailView, {paddingLeft: 20, paddingRight: 20}]}>
            {/* <Text>118m  |  방문  76  |  찜  1.27 </Text> */}
            <Text style={{color: "#abbdbe"}}>방문  </Text>
            <Text style={{color: '#74798a'}}>76</Text>
            <Text style={{color: '#74798a'}}>  |  </Text>
            <Text style={{color: "#abbdbe"}}>찜  </Text>
            <Text style={{color: '#74798a'}}>1.27 </Text>
          </View>
          
          <View style={[styles.divider, {marginTop: 15, marginBottom: 12,}]} />
          
          <View style={styles.storeMoreDetailView}>
            <View style={styles.moreDetailLeftView}>
              <Text style={styles.moreDetailAddressText}>서울 성북구 종암동 132 종암우림카이저팰리스 1층</Text>
              <Text style={styles.moreDetailDistanceText}>418m</Text>
            </View>
            <TouchableOpacity onPress={()=> setIsOpenedMapLinkButtons(true)}>
              <Image style={styles.findRoadImage} source={require('../assets/ic_find_road.png')}/>
            </TouchableOpacity>
          </View>
  
          <View style={[styles.divider, {marginTop: 7, height: 5}]} />
          
        </View>
      );
    }
  
    case 'top': {
      return (
        <View style={styles.topContainer}>
          <View style={styles.topContainerHeaderView}>
            <TouchableOpacity>
              <Image style={styles.topContainerHeaderViewBackImage} source={require('../assets/ic_back_arrow.png')} />
            </TouchableOpacity>
            
            <Text style={styles.topContainerHeaderViewText}>스파</Text>
            
            <TouchableOpacity>
              <Image style={styles.topContainerHeaderViewBackStarImage} source={require('../assets/ic_favorite_star.png')}/>
            </TouchableOpacity>
          </View>
  
          <View style={styles.divider} />
          
          <View style={styles.topContainerBottomView}>
            <View style={styles.topContainerBottomViewLeft}>
              <Text style={styles.topContainerBottomViewLeftAddressText}>서울 성북구 종암동 132 종암우림카이저팰리스 1층 101호</Text>
              <Text style={styles.topContainerBottomViewLeftDistanceText}>418m</Text>
            </View>
            <TouchableOpacity onPress={()=> setIsOpenedMapLinkButtons(true)}>
              <Image style={styles.findRoadImage} source={require('../assets/ic_find_road.png')}/>
            </TouchableOpacity>
          </View>
  
          <View style={styles.divider} />
        </View>
      );
    }
  }
  
};

LottoStoreSheetHeader.propTypes = {
  bottomSheetState: PropTypes.oneOf(['bottom', 'middle', 'top']),
  setIsOpenedMapLinkButtons: PropTypes.func.isRequired,
};

export default LottoStoreSheetHeader;

const styles = StyleSheet.create({
  // 최하단의 바텀시트
  bottomContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    height: 190,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
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
    marginBottom: 21,
  },
  
  storeGuideText: {
    color: 'white',
  },
  
  // 중단의 바텀시트
  middleContainer: {
    marginTop: 7,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#EDEDED',
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
    color: "#74798a",
  },
  
  moreDetailDistanceText: {
    color: "#2157f3"
  },
  
  topBarView: {
    width: '100%', alignItems: 'center', marginTop: 7
  },
  
  topBarInnerView: {
    width: 50,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#abbdbe',
  },
  
  bottomBarView: {
    width: '100%',
    alignItems: 'center'
  },
  
  bottomBarInnerView: {
    width: 134,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#000000',
    bottom: 0,
  },
  
  topContainer: {
    backgroundColor: 'white',
  },
  
  topContainerHeaderView: {
    marginTop: 13,
    marginBottom: 13,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  topContainerHeaderViewBackImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  
  topContainerHeaderViewText: {
    fontSize: 20,
  },
  
  topContainerHeaderViewBackStarImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  
  topContainerBottomView: {
    marginTop: 13,
    marginBottom: 13,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  topContainerBottomViewLeft: {
    flexDirection: 'column',
    width: '90%',
  },
  
  topContainerBottomViewLeftAddressText: {
    fontSize: 14,
    color: "#74798a"
  },
  
  topContainerBottomViewLeftDistanceText: {
    color: "#2157f3"
  }
});
