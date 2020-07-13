import React, {Component, useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  SafeAreaView, TextInput, TouchableOpacity,
  ScrollView,
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ScrollPicker} from 'react-native-value-picker';

// import { selectAddressItem, deselectAddressItem } from "../../redux/actions";
// import { connect } from 'react-redux';

const CheckPrizeScreen = (props) => {
  const pickerRef = useRef('');
  const [pickedValue, setPickedValue] = useState(7);
  const refRBSheet = useRef();


  const MOCK_DATA = [
    {
      value: 1,
      label: '2020.01.25. 895회',
    },
    {
      value: 2,
      label: '2020.02.01. 896회',
    },
    {
      value: 15,
      label: '2020.02.08. 897회',
    },
    {
      value: 16,
      label: '2020.02.15. 898회',
    },
  ];

  useEffect(() => {

  }, []);

  const onLottoRoundButtonPress = () => {
    // pickerRef.current.togglePicker(true);
    console.log(pickerRef.current);
    refRBSheet.current.open()
  };


  return (
    <View style={styles.container}>
      <Image style={styles.topBackImg} source={require('../../assets/ic_prize_back.png')} />
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.qrCodeButtonView}>
          <TouchableOpacity>
            <Image style={styles.qrCodeButtonImg} source={require('../../assets/btn_qrcode.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>고객님의 당첨금액</Text>
        <View style={styles.prizeMoneyView}>
          <Text style={styles.prizeMoneyLabel}>₩ </Text>
          <Text style={styles.prizeMoneyText}>{100}</Text>
        </View>
        <View style={styles.detailButtonView}>
          <TouchableOpacity style={styles.detailButtonTouch}>
            <Text style={styles.detailButtonText}>자세히 보기</Text>
            <Image style={styles.detailButtonImg} source={require('../../assets/ic_white_arrow_right.png')} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View style={styles.bottomViewContainer}>
        <View style={styles.lottoRoundView}>
          <TouchableOpacity style={styles.lottoRoundTouch} onPress={onLottoRoundButtonPress}>
            <Text style={styles.lottoRoundDate}>2020.02.15</Text>
            <View style={styles.lottoRoundRight}>
              <Text style={styles.lottoRoundText}>898</Text>
              <Image style={styles.lottoRoundImg} source={require('../../assets/ic_black_arrow_bottom.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={300}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderRadius: 12,
          },
        }}>
        {/* Scroll Picker 시작 */}
        <View style={styles.SheetView}>
          <ScrollPicker
            // currentValue: 피커에게 선택된 값을 알려줌.
            // extraData: 현제 어떤 데이터를 구독(?)해야 하는지 알려주어야 함.
            // list: 리스트를 구성하는 객체 배열
            // onItemPress: 선택된 값을 업데이트 하는 콜백 함수
            currentValue={pickedValue}
            extraData={pickedValue}
            list={MOCK_DATA}
            onItemPress={setPickedValue}
          />
        </View>
      </RBSheet>

    </View>
  )

};


export default CheckPrizeScreen;

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

  safeContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    height: '35%',
  },

  topBackImg: {
    position: 'absolute',
    height: '35%',
    resizeMode: 'cover',
  },

  qrCodeButtonView: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    paddingRight: 20,
    paddingTop: 15,
  },

  qrCodeButtonImg: {
    resizeMode: 'cover',
    width: 30,
    height: 30,
  },

  titleText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#ffffff",
    marginTop: 27
  },

  prizeMoneyView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 15,
  },

  prizeMoneyLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 5,
  },

  prizeMoneyText: {
    fontSize: 34,
    fontWeight: "600",
    color: "#ffffff",
  },

  detailButtonView: {
    marginTop: 15,
  },

  detailButtonTouch: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    marginLeft: 7,
  },

  detailButtonText: {
    fontSize: 15,
    color: "#ffffff",
    // borderBottomWidth: 1,
    // borderColor: 'white'
  },

  detailButtonImg: {
    marginLeft: 3,
    width: 14,
    height: '100%',
    resizeMode: 'contain',
    marginBottom: 1
  },

  bottomViewContainer: {
    position: 'absolute',
    top: '33%',
    height: '65%',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    paddingBottom: 10,

  },

  lottoRoundView: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    marginTop: 25,
    borderRadius: 15,

    shadowOffset: {
      width: 2,
      height: 2,

    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  lottoRoundTouch: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 19,
    paddingBottom: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  lottoRoundDate: {
    fontSize: 16,
    color: "#74798a"
  },

  lottoRoundRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  lottoRoundText: {
    marginRight: 5,
    color: "#2157f3",
    fontSize: 24,
  },

  lottoRoundImg: {
    width: 16,
    height: 16,
    resizeMode: 'cover',
  },



  // 바텀시트 라이브러리 css
  Container: {
    height: '100%',
    width: '100%',
    paddingTop: 30,
    alignItems: 'center',
  },

  Title: {
    fontSize: 30,
    marginBottom: 60,
  },

  Subtitle: {
    fontSize: 22,
    color: 'red',
    marginBottom: 32,
  },

  Description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 100,
  },

  // 기본 FlatList는 뷰로 래핑되지 않음.
  SheetView: {
    width: '100%',
    height: '100%',
    paddingBottom: 32,
    alignItems: 'center',
  },
});
