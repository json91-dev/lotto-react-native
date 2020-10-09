import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import Geolocation from '@react-native-community/geolocation';
import AddressSearch from '../../components/address/SearchAddress';

import {
  deselectAddressItem,
  getAddressList,
  setInitialSearch,
  getCurrentLocationAddress,
} from '../../redux/actions';
import { getItemFromAsync, setItemToAsync } from '../../helpers/AsyncStroageHelper';

const AddressScreen = (props) => {
  const [inputText, setInputText] = React.useState('');
  const textInputRef = React.useRef({});
  const [isOpenKeyboard, setIsOpenKeyboard] = React.useState('');
  const dispatch = useDispatch();
  
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    
    dispatch(deselectAddressItem());
    dispatch(setInitialSearch());
    
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
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
    dispatch(getAddressList(inputText));
    Keyboard.dismiss();
  };
  
  // 주소를 저장하고 메인화면으로 이동하는 콜백함수.
  const onConfirmPressed = async () => {
    const { isAddressSelected } = useSelector(state => state.address);
    
    if (!isAddressSelected) {
      return;
    }
    
    const address = inputText;
    const singinInfo = await getItemFromAsync('signinInfo');
    await setItemToAsync('singninInfo', { ...singinInfo, address });
    
    props.navigation.replace('BottomNavigator');
  };
  
  // Input버튼의 x버튼을 눌렀을때 동작하는 콜백함수.
  const onInputCancalButtonPressed = () => {
    dispatch(setInitialSearch());
    dispatch(deselectAddressItem());
    setInputText('');
  };
  
  const onSearchMyLocationPress = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        // Permission 허용
        const longitude = JSON.stringify(position.coords.longitude);
        const latitude = JSON.stringify(position.coords.latitude);
        dispatch(getCurrentLocationAddress(longitude, latitude));
      }, (error) => {
        // Permission 거부
        console.log(error);
      });
  };
  
  const BottomButton = () => {
    const { isAddressSelected } = useSelector(state => state.address);
    
    if (isOpenKeyboard) { // 키보드 화면이 열렸을때 하단 버튼을 보여줌.
      return (
        <TouchableOpacity onPress={onSearchPressed} style={styles.searchButtonTouch}>
          <Text style={styles.searchButtonText}>검색</Text>
        </TouchableOpacity>
      );
    }
    
    if (!isAddressSelected) { // 특정 주소가 선택되지 않았을때는 '검색' 버튼 보여줌
      return (
        <TouchableOpacity onPress={onSearchPressed} style={styles.searchButtonTouch}>
          <Text style={styles.searchButtonText}>검색</Text>
        </TouchableOpacity>
      );
    }
    
      return ( // 특정 주소가 선택되었을때 '확인' 버튼 보여줌.
        <TouchableOpacity onPress={onConfirmPressed} style={styles.searchButtonTouch}>
          <Text style={styles.searchButtonText}>확인</Text>
        </TouchableOpacity>
      );
    
  };
  
  const LoadingCurrentLocation = () => {
    const { isLoadingGetCurrentLocation } = useSelector(state => state.address);
    if (isLoadingGetCurrentLocation) {
      return (
        
          <View style={styles.currentLocationLoadingView}>
            <Image style={styles.currentLocationLoadingGifImage} source={require('../../assets/anim_loading.gif')}/>
            <Text style={styles.currentLocationLoadingText}>근처의 숨겨진 로또 명당을 찾기 위해 {"\n"}현재 위치를 찾고 있습니다.</Text>
          </View>
        
      );
    }
      return null;
    
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>지역을 {'\n'}등록해주세요.</Text>
      <Text style={styles.labelSub}>해당 지역의 명당 정보를 매주 무료로 드려요.</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="동/읍/면으로 검색 (예. 역삼동)"
          onChangeText={(text) => {
            setInputText(text);
          }}
          onSubmitEditing={Keyboard.dismiss}
          ref={(ref) => textInputRef.current = ref}
          value={inputText}
         />
        {
          // TextInput에 text가 없을때, 없을때는 Arrow, 있을때는 X 버튼을 보여준다.
          inputText.length === 0 ?
            
            <TouchableOpacity style={styles.cancelImageTouch} onPress={onInputCancalButtonPressed}>
              <Image style={styles.cancelImage} source={require('../../assets/ic_black_arrow_right.png')}/>
            </TouchableOpacity>
            
            :
            
            <TouchableOpacity style={styles.cancelImageTouch} onPress={onInputCancalButtonPressed}>
              <Image style={styles.cancelImage} source={require('../../assets/btn_circle_cancel.png')}/>
            </TouchableOpacity>
        }
      
      </View>
      
      <Text style={styles.textInputLabel}>로또 명당 정보가 적은 곳은 자동으로 시/군/구 단위로 변경됩니다.</Text>
      
      <TouchableOpacity style={styles.searchLocationTouch} onPress={onSearchMyLocationPress}>
        <Image style={styles.searchImage} source={require('../../assets/ic_plane.png')}/>
        <Text style={styles.searchText}>내 위치</Text>
      </TouchableOpacity>
      
      <AddressSearch textInputRef={textInputRef.current} setInputText={setInputText}/>
      
      {BottomButton()}
      {LoadingCurrentLocation()}
    </SafeAreaView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  
  label: {
    // fontFamily: "AppleSDGothicNeo",
    fontSize: 34,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#3b3f4a',
    marginTop: 20,
    marginLeft: 20,
  },
  
  labelSub: {
    width: 320,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#74798a',
    marginLeft: 20,
    marginTop: 15,
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
    backgroundColor: '#ffffff',
    shadowColor: '#000',
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
    position: 'absolute',
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
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#abbdbe',
    marginLeft: 20,
    marginTop: 10,
  },
  
  searchLocationTouch: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    
  },
  
  searchImage: {
    width: 16,
    height: 16,
    resizeMode: 'cover',
  },
  
  searchText: {
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#2157f3',
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
    backgroundColor: '#2157f3',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
  },
  
  searchButtonText: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  
  confirmButtonTouch: {
    width: '100%',
    height: 60,
    backgroundColor: '#2157f3',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
  },
  
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  
  currentLocationLoadingView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(116, 121, 138, 0.5)',
    elevation: 5,
  },
  
  currentLocationLoadingGifImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  
  currentLocationLoadingText: {
    marginTop: 25,
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
});
