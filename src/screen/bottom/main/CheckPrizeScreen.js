import React, { Component, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';
import { ScrollPicker } from 'react-native-value-picker';
import LottoNumbers from '../../../components/checkprize/LottoNumbers';
import LottoDetail from '../../../components/checkprize/LottoDetail';

import {
  getLatestLottoRound,
  getWinLottoNumber,
} from '../../../redux/actions';

const CheckPrizeScreen = (props) => {
  const pickerRef = useRef('');
  const [pickedValue, setPickedValue] = useState(7);
  const refRBSheet = useRef();
  const dispatch = useDispatch();
  
  const { isGettingLatestLottoRound, isGettingWinLottoNumbers } = useSelector(state => state.lottonumber);
  console.log(isGettingLatestLottoRound, isGettingLatestLottoRound);

  
  // 처음에 한번만 로또 정보를 불러와서 수행한다.
  useEffect(() => {
    dispatch(getLatestLottoRound());
  }, []);
  
  // 로또 Round Button Click시 동작하는 콜백함수
  const onLottoRoundButtonPress = () => {
    // pickerRef.current.togglePicker(true);
    refRBSheet.current.open(); // 클릭시 하단 picker를 열어줌
  };
  
  const SelectSheet = () => {
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
    
    return (
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown
        closeOnPressMask
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
    );
  }
  
  return (
    <View style={styles.container}>
      {
        (isGettingLatestLottoRound || isGettingWinLottoNumbers)?
          <View style={styles.loadingView}>
            <Image style={styles.loadingGifImage} source={require('../../../assets/anim_loading.gif')}/>
            <Text style={styles.loadingText}>로또 정보를 가져오는 중입니다...</Text>
          </View>
          : null
      }
      
      <Image style={styles.topBackImg} source={require('../../../assets/ic_prize_back.png')}/>
      <SafeAreaView>
        <View style={styles.qrCodeButtonView}>
          <TouchableOpacity onPress={() => props.navigation.navigate('QRCodeScreen')}>
            <Image style={styles.qrCodeButtonImg} source={require('../../../assets/btn_qrcode.png')}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.topInfoContainer}>
          <Text style={styles.titleText}>고객님의 당첨금액</Text>
          <View style={styles.prizeMoneyView}>
            <Text style={styles.prizeMoneyLabel}>₩ </Text>
            <Text style={styles.prizeMoneyText}>{100}</Text>
          </View>
          <View style={styles.detailButtonView}>
            <TouchableOpacity style={styles.detailButtonTouch}>
              <Text style={styles.detailButtonText}>자세히 보기</Text>
              <Image style={styles.detailButtonImg} source={require('../../../assets/ic_white_arrow_right.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      
      <ScrollView style={styles.bottomViewContainer}>
        <View style={styles.lottoRoundView}>
          <TouchableOpacity style={styles.lottoRoundTouch} onPress={onLottoRoundButtonPress}>
            <Text style={styles.lottoRoundDate}>2020.02.15</Text>
            <View style={styles.lottoRoundRight}>
              <Text style={styles.lottoRoundText}>898</Text>
              <Image style={styles.lottoRoundImg} source={require('../../../assets/ic_black_arrow_bottom.png')}/>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.lottoNumberLabel}>898회차 당첨번호</Text>
        <LottoNumbers/>
        
        <Text style={styles.lottoDetailLabel}>898회차 상세정보</Text>
        <LottoDetail/>
      </ScrollView>
      {SelectSheet()}
    </View>
  );
  
};

export default CheckPrizeScreen;

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
    justifyContent: 'flex-start',
  },
  
  topInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  
  topBackImg: {
    position: 'absolute',
    height: '38%',
    resizeMode: 'cover',
  },
  
  qrCodeButtonView: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    paddingRight: 20,
    marginTop: '6%',
  },
  
  qrCodeButtonImg: {
    resizeMode: 'cover',
    width: 30,
    height: 30,
  },
  
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: '8%',
  },
  
  prizeMoneyView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 15,
  },
  
  prizeMoneyLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 5,
  },
  
  prizeMoneyText: {
    fontSize: 34,
    fontWeight: '600',
    color: '#ffffff',
  },
  
  detailButtonView: {
    marginTop: 15,
    marginBottom: 5,
  },
  
  detailButtonTouch: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    
    marginLeft: 7,
  },
  
  detailButtonText: {
    fontSize: 15,
    color: '#ffffff',
    // borderBottomWidth: 1,
    // borderColor: 'white'
  },
  
  detailButtonImg: {
    marginLeft: 3,
    width: 14,
    height: '100%',
    resizeMode: 'contain',
    marginBottom: 1,
  },
  
  bottomViewContainer: {
    position: 'absolute',
    top: '35%',
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
    backgroundColor: '#ffffff',
    shadowColor: '#000',
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
    color: '#74798a',
  },
  
  lottoRoundRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  lottoRoundText: {
    marginRight: 5,
    color: '#2157f3',
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
  
  lottoNumberLabel: {
    marginTop: '10%',
    marginLeft: 20,
    fontSize: 18,
  },
  
  lottoDetailLabel: {
    marginTop: '10%',
    marginLeft: 20,
    fontSize: 18,
  },
  
  loadingView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(116, 121, 138, 0.5)',
    elevation: 5,
  },
  
  loadingGifImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  
  loadingText: {
    marginTop: 25,
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
});
