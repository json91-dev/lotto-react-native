import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getByteLength, stringByteSize, getByte} from '../../helpers/Utils';
import Toast from 'react-native-easy-toast';
import {getItemFromAsync, setItemToAsync} from '../../helpers/AsyncStroageHelper';

export default function NicknameScreen({navigation}) {
  const [inputText, setInputText] = React.useState('');
  const textInputRef = React.useRef('');
  const toastRef = React.useRef('');
  const [isOpenKeyboard, setIsOpenKeyboard] = React.useState(false);
  

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
    setIsOpenKeyboard(true)
  };

  const _keyboardDidHide = () => {
    console.log("Keyboard Hidden");
    textInputRef.current.blur();
    setIsOpenKeyboard(false)
  };

  const confirm = async () => {
    if (getByte(inputText) < 16) {
      await setItemToAsync('signinInfo', {nickname: inputText});
      let signinInfo = await getItemFromAsync('signinInfo');
      console.log(signinInfo.nickname);
      navigation.navigate('AddressScreen');
    } else {
      toastRef.current.show('한글, 영문, 숫자 최대 16byte로 입력해주세요.')
    }
  };
  
  // inputText의 입력값을 ''으로 설정하는 콜백함수.
  const removeNickname = () => {
    setInputText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>닉네임을 {"\n"}등록해주세요 :)</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="한글, 영문, 숫자 최대 16byte로 입력해주세요."
          onChangeText={(text) => {
            setInputText(text);
          }}
          onSubmitEditing={Keyboard.dismiss}
          ref = {(ref) => textInputRef.current = ref}
          value={inputText}
        >
        </TextInput>
        <TouchableOpacity style={styles.cancelImageTouch} onPress={removeNickname}>
          <Image style={styles.cancelImage} source={require('../../assets/btn_circle_cancel.png')}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.confirmTouch} onPress={confirm}>
        <Text style={styles.confirmText}>확인</Text>
      </TouchableOpacity>
  
  
      <Toast ref={toastRef}
             positionValue={120}
             fadeInDuration={10}
             fadeOutDuration={1000}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  label: {
    fontSize: 34,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#3b3f4a",
    marginTop: '10%',
    marginLeft: 20,
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

    // shadowColor: "rgba(51, 51, 51, 1)",
    // shadowOffset: {
    //   width: 10,
    //   height: 10
    // },
    // shadowRadius: 0.5,
    // shadowOpacity: 0.2,
    // borderWidth: 1,

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

  confirmTouch: {
    width: '100%',
    height: 60,
    backgroundColor: "#2157f3",
    position:'absolute',
    bottom: 0,
    justifyContent: 'center'
  },

  confirmText: {
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  }
});


