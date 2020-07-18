import React, {Component, useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

// import { selectAddressItem, deselectAddressItem } from "../../redux/actions";
// import { connect } from 'react-redux';

const QRCodeScreen = (props) => {
  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      <Text>QR코드 화면</Text>
      <Text>QR코드 화면</Text>
      <Text>QR코드 화면</Text>
    </View>
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

});
