import React, {Component, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Keyboard,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';


import AddressSearch from '../../components/address/SearchAddress'

import { selectAddressItem, deselectAddressItem, getAddressList, setInitialSearch } from "../../redux/actions";
import { connect } from 'react-redux';
import { isEmpty } from '../../helpers/Utils';

const AddressScreen = (props) => {
  const [inputText, setInputText] = React.useState('');
  const textInputRef = React.useRef('');
  const [isOpenKeyboard, setIsOpenKeyboard] = React.useState('');

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  
    props.deselectAddressItem();
    props.setInitialSearch();
    
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setIsOpenKeyboard(true);
  };

  const _keyboardDidHide = () => {
    textInputRef.current.blur();
    setIsOpenKeyboard(false);
  };
  
  const onSearchPressed = () => {
    props.getAddressList(inputText);
    Keyboard.dismiss()
  };
  
  const onConfirmPressed = () => {
    //TODO: 저장된 주소 정보를 AsyncStorage로 저장
    props.navigation.replace('BottomNavigator');
  };


  const BottomButton = () => {
    
    if(isOpenKeyboard) { // 키보드 화면이 열렸을때 하단 버튼을 보여줌.
      return (
        <TouchableOpacity onPress={onSearchPressed} style={styles.searchButtonTouch}>
          <Text style={styles.searchButtonText}>검색</Text>
        </TouchableOpacity>
      )
    }

    else if (!props.isAddressSelected) { // 특정 주소가 선택되지 않았을때는 '검색' 버튼 보여줌
      return (
        <TouchableOpacity onPress={onSearchPressed} style={styles.searchButtonTouch}>
          <Text style={styles.searchButtonText}>검색</Text>
        </TouchableOpacity>
      )
    }

    else {
      return ( // 특정 주소가 선택되었을때 '확인' 버튼 보여줌.
      <TouchableOpacity onPress={onConfirmPressed} style={styles.searchButtonTouch}>
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
          value={inputText}
        >
        </TextInput>
        {
          inputText.length === 0 ?
            
            <TouchableOpacity style={styles.cancelImageTouch} onPress={() => { setInputText(''); props.setInitialSearch() }}>
              <Image style={styles.cancelImage} source={require('../../assets/ic_black_arrow_right.png')}/>
            </TouchableOpacity>
            
            :
  
            <TouchableOpacity style={styles.cancelImageTouch} onPress={() => { setInputText(''); props.setInitialSearch() }}>
              <Image style={styles.cancelImage} source={require('../../assets/btn_circle_cancel.png')}/>
            </TouchableOpacity>
        }
     
      </View>

      <Text style={styles.textInputLabel}>로또 명당 정보가 적은 곳은 자동으로 시/군/구 단위로 변경됩니다.</Text>

      <TouchableOpacity style={styles.searchLocationTouch}>
        <Image style={styles.searchImage} source={require('../../assets/ic_plane.png')} />
        <Text style={styles.searchText}>내 위치</Text>
      </TouchableOpacity>

      
      <AddressSearch textInputRef={textInputRef.current} setInputText={setInputText}/>

      {BottomButton()}
      
      {/*로딩 애니메이션*/}
      {/*<View style={styles.currentLocationLoadingView}>*/}
        {/*<Image style={styles.currentLocationLoadingGifImage} source={require('../../assets/anim_loading.gif')}/>*/}
        {/*<Text style={styles.currentLocationLoadingText}>근처의 숨겨진 로또 명당을 찾기 위해 {"\n"}현재 위치를 찾고 있습니다.</Text>*/}
      {/*</View>*/}
    </SafeAreaView>
  )

};

const mapStateToProps = ({address}) =>{
  // address 리듀서에서 가져온 state를 현제 컴포넌트의 props로 맵핑시켜줌.
  const { isAddressSelected, selectedAddressItem, addressList, error, searchResultState } = address;

  return {
    isAddressSelected,
    selectedAddressItem,
    addressList,
    error,
    searchResultState,
  }
};

export default connect(
  mapStateToProps,
  {
    selectAddressItem,
    deselectAddressItem,
    getAddressList,
    setInitialSearch,
  } // address 리듀서에서 가져온 function을 현재 컴포넌트의 props로 매핑시켜줌.
)(AddressScreen)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
   
  },

  label: {
    // fontFamily: "AppleSDGothicNeo",
    fontSize: 34,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#3b3f4a",
    marginTop: 20,
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
    elevation: 4,
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
    elevation: 4,
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

  // searchResultLabel: {
  //   fontSize: 18,
  //   fontWeight: "600",
  //   fontStyle: "normal",
  //   letterSpacing: 0,
  //   color: "#3b3f4a",
  //   marginTop: 32,
  //   marginLeft: 20,
  // },

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
  },
  
  currentLocationLoadingView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(116, 121, 138, 0.5)",
    elevation: 5,
  },
  
  currentLocationLoadingGifImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  
  currentLocationLoadingText: {
    marginTop: 25,
    color: "#ffffff",
    fontSize: 14,
    textAlign: 'center'
    
  }

});
