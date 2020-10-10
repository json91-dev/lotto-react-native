import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const LottoNumbers = (props) =>{
  const [lottoNumbers, setLottoNumbers] = React.useState([]);

  useEffect(() => {
    const dummyLottoNumbers = [18, 21, 28, 35, 37, 42, 8];
    setLottoNumbers(dummyLottoNumbers);
  }, []);
  
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

const mapStateToProps = ({}) =>{
  return {

  };
};

export default connect(
  mapStateToProps,
  {}
)(LottoNumbers);

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
