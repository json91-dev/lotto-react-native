import React, {Component, useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity
, Dimensions } from 'react-native';

// import { selectAddressItem, deselectAddressItem } from "../../redux/actions";
// import { connect } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const QRCodeScreen = (props) => {
  const [scan, setScan] = useState(false);
  const [scanResult, setScanResult] = useState(false);
  const [result, setResult] = useState(null);
  
  const scanner = React.useRef('');
  
  const onSuccess = (e) => {
    const check = e.data.substring(0, 4);
    console.log(`scanned data${  check}`);
    
    setResult(e);
    setScan(false);
    setScanResult(true);
    
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
  
  const activeQR = () => {
    setScan(true);
  };
  
  const scanAgain = () => {
    setScan(true);
    setScanResult(false);
  };
  
  const desccription = 'QR code (abbreviated from Quick Response Code) is the trademark for a type of matrix barcode (or two-dimensional barcode) first designed in 1994 for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached. In practice, QR codes often contain data for a locator, identifier, or tracker that points to a website or application. A QR code uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to store data efficiently; extensions may also be used.';
  
  useEffect(() => {
  
  }, []);
  
  return (
    <View style={styles.container}>
      <View>
        {/* <StatusBar barStyle="dark-content" /> */}
        <Text style={styles.textTitle}>Welcome To React-Native QR Code Tutorial !</Text>
        {!scan && !scanResult &&
        <View style={styles.cardView} >
          <Text numberOfLines={8} style={styles.descText}>{desccription}</Text>
          
          <TouchableOpacity onPress={activeQR} style={styles.buttonTouchable}>
            <Text style={styles.buttonTextStyle}>Click to Scan !</Text>
          </TouchableOpacity>
        
        </View>
        }
        
        {scanResult &&
        <Fragment>
          <Text style={styles.textTitle1}>Result !</Text>
          <View style={ScanResult ? styles.scanCardView : styles.cardView}>
            <Text>Type : {result.type}</Text>
            <Text>Result : {result.data}</Text>
            <Text numberOfLines={1}>RawData: {result.rawData}</Text>
            <TouchableOpacity onPress={scanAgain} style={styles.buttonTouchable}>
              <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
            </TouchableOpacity>
          
          </View>
        </Fragment>
        }
        
        {scan &&
        <QRCodeScanner
          reactivate
          showMarker
          ref={(node) => { scanner.current = node; }}
          onRead={this.onSuccess}
          topContent={
            <Text style={styles.centerText}>
              Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code to test.</Text>
          }
          bottomContent={
            <View>
              <TouchableOpacity style={styles.buttonTouchable} onPress={() => scanner.current.reactivate()}>
                <Text style={styles.buttonTextStyle}>OK. Got it!</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.buttonTouchable} onPress={() => setScan(false)}>
                <Text style={styles.buttonTextStyle}>Stop Scan</Text>
              </TouchableOpacity>
            </View>
            
          }
        />
        }
      </View>
    </View>
  );
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
  cardView: {
    width: deviceWidth - 32,
    height: deviceHeight / 2,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: 'white'
  },
  scanCardView: {
    width: deviceWidth - 32,
    height: deviceHeight / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: 'white'
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
  }
  
});
