import React, {Component, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text, Keyboard,
  SafeAreaView, TextInput, TouchableOpacity,
} from 'react-native';


import AddressSearch from '../../components/address/SearchAddress'

import { selectAddressItem, deselectAddressItem } from "../../redux/actions";
import { connect } from 'react-redux';

const AddressScreen = (props) => {
  const [inputText, setInputText] = React.useState('');
  const textInputRef = React.useRef('');
  const [isOpenKeyboard, setIsOpenKeyboard] = React.useState('');

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    console.log("Keyboard Shown");
    setIsOpenKeyboard(true);
  };

  const _keyboardDidHide = () => {
    console.log("Keyboard Hidden");
    textInputRef.current.blur();
    setIsOpenKeyboard(false);
  };
  
  const onSearchPressed = () => {
    console.log(props.isAddressSelected);
    props.navigation.replace('BottomNavigator');
  };


  const BottomButton = () => {
    console.log(props.isAddressSelected);

    if(isOpenKeyboard) {
      return (
        <TouchableOpacity onPress={onSearchPressed} style={styles.searchButtonTouch}>
          <Text style={styles.searchButtonText}>검색</Text>
        </TouchableOpacity>
      )
    }

    else if (!props.isAddressSelected) {
      return (
        <TouchableOpacity onPress={onSearchPressed} style={styles.searchButtonTouch}>
          <Text style={styles.searchButtonText}>검색</Text>
        </TouchableOpacity>
      )
    }

    else {
      return (
      <TouchableOpacity onPress={onSearchPressed} style={styles.searchButtonTouch}>
        <Text style={styles.searchButtonText}>확인</Text>
      </TouchableOpacity>
      )
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>지역을 {"\n"}등록해주세요.</Text>
      <Text style={styles.labelSub}>해당 지역의 명당 정보를 매주 무료로 드려요.</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="동/읍/면으로 검색 (예. 역삼동)"
          onChangeText={(text) => {
            setInputText(text);
          }}
          onSubmitEditing={Keyboard.dismiss}
          ref = {(ref) => textInputRef.current = ref}
        >
        </TextInput>
        <TouchableOpacity style={styles.cancelImageTouch}>
          <Image style={styles.cancelImage} source={require('../../assets/btn_circle_cancel.png')}/>
        </TouchableOpacity>
      </View>

      <Text style={styles.textInputLabel}>로또 명당 정보가 적은 곳은 자동으로 시/군/구 단위로 변경됩니다.</Text>

      <TouchableOpacity style={styles.searchLocationTouch}>
        <Image style={styles.searchImage} source={require('../../assets/ic_plane.png')} />
        <Text style={styles.searchText}>내 위치</Text>
      </TouchableOpacity>

      <Text style={styles.searchResultLabel}>'신' 검색 결과</Text>
      <AddressSearch/>

      {BottomButton()}



    </SafeAreaView>
  )

};

const mapStateToProps = ({address}) =>{
  const { isAddressSelected, selectedAddressItem, addressItems } = address;

  return {
    isAddressSelected,
    selectedAddressItem,
    addressItems
  }
};

export default connect(
  mapStateToProps,
  {selectAddressItem, deselectAddressItem}
)(AddressScreen)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    borderWidth: 1,
  },

  label: {
    // fontFamily: "AppleSDGothicNeo",
    fontSize: 34,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#3b3f4a",
    marginTop: '10%',
    marginLeft: 20,
  },

  labelSub: {
    width: 320,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#74798a",
    marginLeft: 20,
    marginTop: 15
  },

  inputView: {
    width: '90%',
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  textInput: {
    width: '100%',
    height: 70,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cancelImage: {
    width: 16,
    height: 16,
    resizeMode: 'cover',
  },

  cancelImageTouch: {
    position:'absolute',
    right: 0,
    top: 15,
    // 부모와 같은 elevation을 주어야 보여짐.
    elevation: 5,
    backgroundColor: 'white',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },

  textInputLabel: {
    width: 335,
    fontSize: 12,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#abbdbe",
    marginLeft: 20,
    marginTop: 10,
  },

  searchLocationTouch: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchImage: {
    width: 16,
    height: 16,
    resizeMode: 'cover',
  },

  searchText: {
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#2157f3",
    marginLeft: 10,
  },

  searchResultLabel: {
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#3b3f4a",
    marginTop: 32,
    marginLeft: 20,
  },

  searchButtonTouch: {
    width: '100%',
    height: 60,
    backgroundColor: "#2157f3",
    position:'absolute',
    bottom: 0,
    justifyContent: 'center'
  },

  searchButtonText: {
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },

  confirmButtonTouch: {
    width: '100%',
    height: 60,
    backgroundColor: "#2157f3",
    position:'absolute',
    bottom: 0,
    justifyContent: 'center'
  },

  confirmButtonText: {
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  }

});
