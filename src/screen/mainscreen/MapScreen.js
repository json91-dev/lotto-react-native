import React, {Component, useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
  SafeAreaView, Image,
} from 'react-native';

import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
import { Col, Row, Grid } from "react-native-easy-grid";
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";

const MapScreen = (props) => {
  useEffect(() => {
  
  }, []);
  
  const P0 = {latitude: 37.564362, longitude: 126.977011};
  const P1 = {latitude: 37.565051, longitude: 126.978567};
  const P2 = {latitude: 37.565383, longitude: 126.976292};
  
  
  return (
    <SafeAreaView style={styles.container}>
      <NaverMapView
        style={{width: '100%', height: '100%'}}
        showsMyLocationButton={true}
        center={{...P0, zoom: 16}}
        onTouch={e => this
          // console.warn('onTouch', JSON.stringify(e.nativeEvent))
        }
        onCameraChange={e => this
          // console.warn('onCameraChange', JSON.stringify(e))
        }
        onMapClick={e => this
          // console.warn('onMapClick', JSON.stringify(e))
        }
        mapPadding={{bottom: 155}}
        logoGravity ={0}
      >
        <Marker
          coordinate={P0}
          onClick={() => this
          // console.warn('onClick! p0')
        }/>
        <Marker
          coordinate={P1}
          pinColor="blue"
          onClick={() => this}
          />
        <Marker coordinate={P2} pinColor="red" onClick={() => this
          // console.warn('onClick! p2')
        }/>
        <Path coordinates={[P0, P1]}
              onClick={this}/>
        <Polyline coordinates={[P1, P2]}
                  onClick={this}/>
        <Circle coordinate={P0} color={"rgba(255,0,0,0.3)"} radius={200} onClick={() => this
          // console.warn('onClick! circle')
        }/>
        <Polygon coordinates={[P0, P1, P2]} color={`rgba(0, 0, 0, 0.5)`} onClick={() => this
          // console.warn('onClick! polygon')
        }/>
      </NaverMapView>
  
      <View style={styles.backButtonView}>
        <TouchableOpacity style={styles.backButtonTouch} onPress={() => props.navigation.goBack()}>
          <Image style={styles.backButtonImage} source={require('../../assets/btn_back.png')} />
        </TouchableOpacity>
      </View>
  
      <View style={styles.searchButtonView}>
        <TouchableOpacity style={styles.searchButtonTouch}>
          <Image style={styles.searchButtonImage} source={require('../../assets/btn_search.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default MapScreen;

// const mapStateToProps = ({address}) =>{
//   const { isAddressSelected, selectedAddressItem, addressItems } = address;

//   return {
//     isAddressSelected,
//     selectedAddressItem,
//     addressItems
//   }
// };

// export default connect(
//   mapStateToProps,
//   {selectAddressItem, deselectAddressItem}
// )(AddressScreen)




const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  
  /* 상단 버튼 */
  
  backButtonView: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  
  backButtonTouch: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "rgba(116, 121, 138, 0.5)"
  },
  
  backButtonImage: {
    resizeMode: 'cover',
    width:'100%',
    height: '100%'
  },
  
  searchButtonView: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  
  searchButtonTouch: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "rgba(116, 121, 138, 0.5)"
  },
  
  searchButtonImage: {
    resizeMode: 'cover',
    width:'100%',
    height: '100%'
  },
  
});
