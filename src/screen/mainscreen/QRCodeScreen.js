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

// import { selectAddressItem, deselectAddressItem } from "../../redux/actions";
// import { connect } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QRCodeScreen = (props) => {
  const [scan, setScan] = useState(false);
  const [scanResult, setScanResult] = useState(false);
  const [result, setResult] = useState(null);
  const scanner = React.useRef('');
  
  // qrcode 인식 성공시 콜백
  const onSuccess = (e) => {
    const check = e.data.substring(0, 4);
    console.log('scanned data' + check);

    setResult(e);
    setScan(false);
    setScanResult(true);
    
    console.log(e);

    if (check === 'http') {
      Linking
        .openURL(e.data)
        .catch(err => console.error('An error occured', err));

    } else {
      setResult(e);
      setScan(false);
      setScanResult(true);
    }
  };

  useEffect(() => {

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.qrScannerView}>
        <QRCodeScanner
          cameraStyle={styles.qrScannerCamera}
          reactivate={true}
          showMarker={false}
          ref={(node) => { scanner.current = node }}
          onRead={onSuccess}
        />
      </View>
      
      <View style={styles.backButtonView}>
        <TouchableOpacity style={styles.backButtonTouch}>
          <Image style={styles.backButtonImage} source={require('../../assets/btn_back.png')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchButtonView}>
        <TouchableOpacity style={styles.searchButtonTouch}>
          <Image style={styles.searchButtonImage} source={require('../../assets/btn_search.png')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.qrGuideView}></View>
      
    </SafeAreaView>
  )
};

export default QRCodeScreen;

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
    height: '100%',
    width: '100%',
  },
  
  scrollViewStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#99003d'
  },

  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 16,
    color: 'white'
  },
  
  textTitle1: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 16,
    color: 'black'
  },

  buttonScan: {
    width: 42,
  },
  
  descText: {
    padding: 16,
    textAlign: 'justify',
    fontSize: 16
  },


  highlight: {
    fontWeight: '700',
  },

  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonTouchable: {
    fontSize: 21,
    backgroundColor: '#ff0066',
    marginTop: 32,

    width: deviceWidth - 62,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  qrScannerCamera: {
    height: deviceHeight,
    width: deviceWidth
  },
  
  qrScannerView: {
    position: 'absolute'
  },
  
  qrGuideView: {
  
  },
  
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
  }

});
