import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";

import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

const LottoStoreSheetContent = (props) =>{
  useEffect(() => {
  
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.lottoRoundView}>
        <Text style={styles.lottoRoundDate}>2020.02.15.</Text>
        <Text style={styles.lottoRoundText}>898</Text>
      </View>
      
      <View style={{marginTop: 15,}}>
        <Text style={{fontSize: 18}}>예상 확률</Text>
      </View>
      
      <View style={styles.lottoWinningView}>
        <View style={styles.lottoWinningCard}>
          <Grid>
            <Col>
              <Row>
                <Image style={{resizeMode: 'cover', width: 26, height: 33,}} source={require('../../assets/ic_rank_1.jpg')}></Image>
              </Row>
            </Col>
            
            <Col>
              <Row style={{alignItems: 'flex-end'}}>
                <Text style={styles.lottoWinningPercentLabel}>확률</Text>
              </Row>
              <Row>
                <Text>33%</Text>
              </Row>
              <Row></Row>
            </Col>
          </Grid>
          
          <Text style={{fontSize: 12,}}>로또 당첨</Text>
          
          <Grid>
            <Row style={{marginTop: 5,}}>
              <Col>
                <Text style={styles.lottoWinningCountLabel}>횟수</Text>
              </Col>
              <Col>
                <Text style={styles.lottoWinningCountText}>35</Text>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <Text style={styles.lottoWinningPrizeLabel}>순위</Text>
              </Col>
              <Col>
                <Text style={styles.lottoWinningPrizeText}>3</Text>
              </Col>
            </Row>
          </Grid>
        </View>
  
        <View style={styles.lottoWinningCard}>
          <Grid>
            <Col>
              <Row>
                <Image style={{resizeMode: 'cover', width: 26, height: 33,}} source={require('../../assets/ic_rank_2.jpg')}></Image>
              </Row>
            </Col>
      
            <Col>
              <Row style={{alignItems: 'flex-end'}}>
                <Text style={styles.lottoWinningPercentLabel}>확률</Text>
              </Row>
              <Row>
                <Text>33%</Text>
              </Row>
              <Row></Row>
            </Col>
    
          </Grid>
    
          <Text style={{fontSize: 12,}}>로또 당첨</Text>
    
          <Grid>
            <Row style={{marginTop: 5,}}>
              <Col>
                <Text style={styles.lottoWinningCountLabel}>횟수</Text>
              </Col>
              <Col>
                <Text style={styles.lottoWinningCountText}>124</Text>
              </Col>
            </Row>
      
            <Row>
              <Col>
                <Text style={styles.lottoWinningPrizeLabel}>순위</Text>
              </Col>
              <Col>
                <Text style={styles.lottoWinningPrizeText}>1</Text>
              </Col>
            </Row>
          </Grid>
        </View>
  
        <View style={styles.lottoWinningCard}>
          <Grid>
            <Col>
              <Row>
                <Text>로또투어 추천</Text>
              </Row>
              <Row>
                <Image style={{resizeMode: 'cover', width: 26, height: 33,}} source={require('../../assets/ic_rank_1.jpg')}></Image>
              </Row>
              <Row>
                <Text>좋지 않아요</Text>
              </Row>
            </Col>
          </Grid>
        </View>
      </View>
  
      <View style={{marginTop: 30,}}>
        <Text style={{fontSize: 18}}>자동 VS 수동</Text>
      </View>
  
      <View style={{paddingLeft: 15, marginTop: 30}}>
        <Text>이번주 추천 방식은?</Text>
      </View>
  
      <View style={styles.lottoRecommendView}>
        <View style={styles.lottoRecommendLeftView}>
          <View style={styles.lottoRecommendPercentView}>
            <View style={styles.lottoRecommendPercentBarAuto}></View>
            <Text style={{marginLeft: 10}}>14% 자동</Text>
          </View>
          <View style={[styles.lottoRecommendPercentView,{marginTop: 10}]}>
            <View style={styles.lottoRecommendPercentBarManual}>
            </View>
            <Text style={{marginLeft: 10}}>37% 수동</Text>
          </View>
        </View>
        
        <View style={styles.lottoRecommendRightView}>
          <Text style={styles.lottoRecommendRightText}>수동</Text>
        </View>
      </View>
  
      <View style={{marginTop: 30,}}>
        <Text style={{fontSize: 18}}>판매점 성적표</Text>
      </View>
      
      <View style={styles.storeWinningPrizeView}>
        <Text style={styles.storeWinningPrizeTextLeft}>누적 당첨 금액</Text>
        <Text style={styles.storeWinningPrizeTextRight}>19억 6472만원</Text>
      </View>




    </View>
  )
};

const mapStateToProps = ({}) =>{
  return {}
};

export default connect(
  mapStateToProps,
  {}
)(LottoStoreSheetContent);


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
  },
  
  lottoRoundView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 19,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 19,
    borderRadius: 10,
    marginTop: 25,
    
  },
  
  lottoRoundDate: {
    fontSize: 16,
    color: "#74798a",

  },
  
  lottoRoundText: {
    color: "#2157f3",
    fontSize: 24,
  },
  
  lottoWinningView: {
    marginTop: '5%',
    height: 130,
    flexDirection: 'row'
  },
  
  lottoWinningCard: {
    width:'30%',
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    paddingTop: 16,
    paddingLeft: 13,
    paddingRight: 13,
    marginRight: '5%'
  },
  
  lottoWinningPercentLabel: {
    color: "#74798a",
    fontSize: 12,
  },
  lottoWinningPercentText: {
    fontSize: 18,
  },
  lottoWinningCountLabel: {
    color: "#74798a",
    fontSize: 12,
  },
  lottoWinningCountText: {
    fontSize: 12,
    color: "#2157f3",
    textAlign: 'right'
  },
  
  lottoWinningPrizeLabel: {
    color: "#74798a",
    fontSize: 12,
  },
  
  lottoWinningPrizeText: {
    fontSize: 12,
    color: "#2157f3",
    textAlign: 'right'
  },
  
  // 로또 추천 방식
  lottoRecommendView: {
    marginLeft: 12,
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  
  lottoRecommendLeftView: {
    width: '80%',
    
  },
  
  lottoRecommendRightView: {
    width: '20%'
  },
  
  lottoRecommendPercentView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  
  lottoRecommendPercentBarAuto: {
    width: 68,
    height: 17,
    borderRadius: 12.5,
    backgroundColor: "#2157f3"
  },
  
  lottoRecommendPercentBarManual: {
    width: '70%',
    height: 17,
    borderRadius: 12.5,
    backgroundColor: "#ff5d55"
  },
  
  lottoRecommendRightText: {
    textAlign: 'right',
    fontSize: 24,
    color: "#2157f3"
  },
  
  storeWinningPrizeView: {
    marginTop: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  storeWinningPrizeTextLeft: {
    fontSize: 16,
    color: "#74798a"
  },
  
  storeWinningPrizeTextRight: {
    fontSize: 24,
    color: "#2157f3"
  }
  
  

});
