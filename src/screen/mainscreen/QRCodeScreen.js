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

// import { selectAddressItem, deselectAddressItem } from "../../redux/actions";
// import { connect } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BottomSheet from 'reanimated-bottom-sheet';
import QrBottomSheet from '../../components/qrcode/QrBottomSheet';
import WinningBottomSheet from '../../components/qrcode/WinningBottomSheet';


const QRCodeScreen = (props) => {
  const scanner = React.useRef('');
  const [sheetIndex, setSheetIndex]  = React.useState(0);
  
  // qrcode 인식 성공시 콜백
  const onSuccess = (e) => {
    const check = e.data.substring(0, 4);
    console.log('scanned data' + check);
    
    // 데이터가 http주소라면 해당 주소로 이동
    // TODO: 추후 스캔이 일어났을때는 스캔을 막아줘야함.
    if (check === 'http') {
      // Linking.openURL(e.data).catch(err => console.error('An error occured', err));
      console.log(e.data);
    } else {
    
    }
  };
  
  // 바텀시트의 컨텐츠를 나타내는 함수.
  const renderContent = () => {
    if (sheetIndex === 0) {
      return <QrBottomSheet/>
    } else {
      return <WinningBottomSheet/>
    }
  };
  
  // 바텀시트의 header의 탭 클릭시 콜백함수.
  const changeSheet = (index) => () => {
    setSheetIndex(index);
  };
  
  // 바텀시트의 헤더를 나타내는 함수.
  const renderHeader = () => {
    return (
      <View style={styles.sheetHeaderView}>
        <View style={{ width: 50,
          height: 5,
          borderRadius: 2.5,
          backgroundColor: "#abbdbe"}}>
        </View>
        {
          (sheetIndex === 0)?
            <Row>
              <Col>
                <TouchableOpacity style={styles.sheetActiveTouch} onPress={changeSheet(0)}>
                  <View>
                    <Text>QR 입력</Text>
                  </View>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity style={styles.sheetInActiveTouch} onPress={changeSheet(1)}>
                  <View>
                    <Text>당첨 내역</Text>
                  </View>
                </TouchableOpacity>
              </Col>
            </Row>
            :
            <Row>
              <Col>
                <TouchableOpacity style={styles.sheetInActiveTouch} onPress={changeSheet(0)}>
                  <View>
                    <Text>QR 입력</Text>
                  </View>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity style={styles.sheetActiveTouch} onPress={changeSheet(1)}>
                  <View>
                    <Text>당첨 내역</Text>
                  </View>
                </TouchableOpacity>
              </Col>
            </Row>
        }
        
        <View style={{backgroundColor: 'red', width: '100%'}}>
      
        </View>
        
        <View style={{
          position: 'absolute',
          bottom: 3,
          width: 134,
          height: 5,
          borderRadius: 100,
          backgroundColor: "#000000"}}>
        </View>
      </View>
    )
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
        <TouchableOpacity style={styles.backButtonTouch} onPress={() => props.navigation.goBack()}>
          <Image style={styles.backButtonImage} source={require('../../assets/btn_back.png')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchButtonView}>
        <TouchableOpacity style={styles.searchButtonTouch} onPress={() => props.navigation.navigate('MapScreen')}>
          <Image style={styles.searchButtonImage} source={require('../../assets/btn_search.png')} />
        </TouchableOpacity>
      </View>
  
      <BottomSheet
        snapPoints = {[400, 83, 83]}
        renderContent = {renderContent}
        renderHeader = {renderHeader}
        initialSnap= {1}
      />
      
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
  
  qrScannerCamera: {
    height: deviceHeight,
    width: deviceWidth
  },
  
  qrScannerView: {
    position: 'absolute'
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
  
  /* 바텀 시트 */
  sheetHeaderView: {
    width: '100%',
    height: 83,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  
  sheetContentView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red'
  },
  
  sheetActiveTouch: {
    borderBottomWidth: 1,
    borderColor: 'blue',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  sheetInActiveTouch: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }

});
