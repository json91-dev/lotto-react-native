import React, { useEffect, useState } from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {StyleSheet, View, Text} from 'react-native';
import { useSelector } from 'react-redux';

const LottoDetail = () => {
  const [winnerInfo, setWinnerInfo] = useState([]);
  
  // 숫자를 입력했을때 ,가 있는 숫자로 바꿔줌.
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `,`);
  };
  
  const {
    winLottoNumbers, // 당첨번호, 디테일
  } = useSelector(state => state.lottonumber);
  
  useEffect(() => {
    if (winLottoNumbers.winnerInfo) {
      setWinnerInfo(winLottoNumbers.winnerInfo);
    } else {
      setWinnerInfo([]);
    }
  }, [winLottoNumbers]);

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Grid>
          {winnerInfo.map((item, index) => {
            return (
              <Row style={styles.detailRow} key={item + index}>
                <Col style={styles.gradeCol}>
                  <Text style={styles.gradeText}>{numberWithCommas(item.prize)}등</Text>
                </Col>
                <Col style={styles.winnersCol}>
                  <Text style={styles.winnersText}>{numberWithCommas(item.numOfWin)}명</Text>
                </Col>
                <Col style={styles.prizeCol}>
                  <Text style={styles.prizeText}>{numberWithCommas(item.priceOfWin)}</Text>
                </Col>
              </Row>
            );
          })}
        </Grid>
      </View>
    </View>
  );
};

export default LottoDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 14,
    paddingLeft: 20,
    paddingRight: 20,
  },

  detailContainer: {
    width: '100%',
    height: 146,
  },

  detailRow: {},

  gradeCol: {
    width: '15%',
    alignItems: 'center',
  },

  winnersCol: {
    width: '30%',
    alignItems: 'flex-end',
  },

  prizeCol: {
    width: '50%',
    alignItems: 'flex-end',
  },

  gradeText: {
    color: '#84dd84',
  },

  winnersText: {
    color: '#74798a',
  },

  prizeText: {
    color: '#2157f3',
  },
});
