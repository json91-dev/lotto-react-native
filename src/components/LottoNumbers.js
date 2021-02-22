import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const LottoNumbers = () =>{
  const [lottoNumbers, setLottoNumbers] = React.useState([]);
  const {
    winLottoNumbers, // 당첨번호, 디테일
  } = useSelector(state => state.lottonumber);
  
  // 로또 번호 및 디테일 정보가 바뀔때마다 설정해줌.
  useEffect(() => {
    const { winNumber } = winLottoNumbers;
    if (winNumber) {
      setLottoNumbers(winNumber);
    } else {
      setLottoNumbers([]);
    }
  }, [winLottoNumbers]);
  
  return (
    <View style={styles.container}>
      <View style={styles.lottoNumberContainerView}>
        {lottoNumbers.map((item, index) => {
          if(index < 6) {
            // 6번째 공은 다른 색상으로 표시함.
            return (
              <View key={item.toString()} style={styles.lottoNumberView}>
                <Text style={styles.lottoNumberText}>{item}</Text>
              </View>
            );
          }
            return (
              <View key={item.toString()} style={styles.lottoNumber7View}>
                <Text style={styles.lottoNumberText}>{item}</Text>
              </View>
            );
        })}
      </View>
    </View>
  );
};

export default LottoNumbers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 11,
    paddingLeft: 20,
    paddingRight: 20,
  },

  lottoNumberContainerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  lottoNumberView: {
    backgroundColor: '#1839EE',
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 54,
    borderRadius: 15,
    marginLeft: 4,
    marginRight: 4,
  },

  lottoNumber7View: {
    backgroundColor: '#8AE57D',
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 54,
    borderRadius: 15,
    marginLeft: 4,
    marginRight: 4,
  },

  lottoNumberText: {
    fontSize: 24,
    color: "#ffffff"
  }

});
