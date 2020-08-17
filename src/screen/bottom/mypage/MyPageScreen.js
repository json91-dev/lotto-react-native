import React, {Component, useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Switch
} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
import { Dimensions } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { VictoryPie, VictoryLabel } from "victory-native";
import reducers from '../../../redux/reducers';

const MyPageScreen = (props) => {
  
  useEffect(() => {
  
  }, []);
  
  const graphicColor = ['#2157f3', '#fedb67', '#6dd952'];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{height: '100%',}}>
        <View style={styles.topHeader}>
          <Text style={styles.topHeaderTitle}>안녕하세요 이루다님</Text>
          <View style={styles.topHeaderPlayer}>
            <Text style={styles.topHeaderPlayerText}>경기도 안산시 플레이어</Text>
            <Image style={styles.topHeaderPlayerArrowImage}/>
          </View>
          
          <View style={styles.topHeaderMember}>
            <Image style={styles.topHeaderMemberLeftImage}/>
            <View style={styles.topHeaderMemberRight}>
              <Text style={styles.topHeaderMemberRightText}>프리니엄 회원</Text>
              <View style={styles.topHeaderMemberRightView}>
                <Text style={styles.topHeaderMemberRightViewText}></Text>
                <Image style={styles.topHeaderMemberRightViewImage} />
              </View>
            </View>
          </View>
        </View>
  
        <View style={styles.labelView}>
          <Text style={styles.labelText}>누적 당첨 횟수</Text>
        </View>
        
        <View style={styles.winningCountView}>
          <Grid style={styles.winningCountGrid}>
            <Row style={styles.winningCountTopRow}>
              <Col><Text style={styles.winningCountTopText}>1등</Text></Col>
              <Col><Text style={styles.winningCountTopText}>2등</Text></Col>
              <Col><Text style={styles.winningCountTopText}>3등</Text></Col>
              <Col><Text style={styles.winningCountTopText}>4등</Text></Col>
              <Col><Text style={styles.winningCountTopText}>5등</Text></Col>
            </Row>
            <Row style={styles.winningCountBottomRow}>
              <Col><Text style={styles.winningCountBottomText}>1</Text></Col>
              <Col><Text style={styles.winningCountBottomText}>12</Text></Col>
              <Col><Text style={styles.winningCountBottomText}>123</Text></Col>
              <Col><Text style={styles.winningCountBottomText}>1234</Text></Col>
              <Col><Text style={styles.winningCountBottomText}>12345</Text></Col>
            </Row>
          
          </Grid>
        </View>
  
        <View style={styles.labelView}>
          <Text style={styles.labelText}>TOP3</Text>
        </View>
        
        <View style={styles.chartView}>
          <View style={styles.chartLeftView}>
            <VictoryPie
              data={[
                { x: 1, y: 2, label: "25" },
                { x: 2, y: 3, label: "45" },
                { x: 3, y: 5, label: "30" }
              ]}
              colorScale={graphicColor}
              width={180}
              height={180}
              labels={({ datum }) => datum.y}
              style={{
                
                data: {
                  fillOpacity: 0.9,
                  // stroke: "black",
                  // strokeWidth: 3
                },
                labels: {fill: 'black', fontSize: 15, padding: 9, }
                
              }}
              innerRadius={70}
              labelComponent={
                <VictoryLabel angle={0}
                backgroundStyle = {{fill: 'red'}}
              />}
            />
          </View>
          <View style={styles.chartRightView}>
          </View>
        </View>
  
        <View style={styles.labelView}>
          <Text style={styles.labelText}>내가 찜한 명당</Text>
        </View>
        
        <View style={styles.favoriteStoreView}>
          <TouchableOpacity style={styles.favoriteStoreItemTouch}>
            <View style={styles.favoriteStoreItemLeftView}>
              <Image style={styles.favoriteStoreItemLeftImage} source={require('../../../assets/ic_shop_replace.png')}/>
              <Text style={styles.favoriteStoreItemLeftText}>스파</Text>
            </View>
            <View style={styles.favoriteStoreItemRightView}>
              <Image style={styles.favoriteStoreItemRightImage} source={require('../../../assets/ic_star_blue.png')}/>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.favoriteStoreItemTouch}>
            <View style={styles.favoriteStoreItemLeftView}>
              <Image style={styles.favoriteStoreItemLeftImage} source={require('../../../assets/ic_shop_replace.png')}/>
              <Text style={styles.favoriteStoreItemLeftText}>로또 명당</Text>
            </View>
            <View style={styles.favoriteStoreItemRightView}>
              <Image style={styles.favoriteStoreItemRightImage} source={require('../../../assets/ic_star_blue.png')}/>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.favoriteStoreItemTouch}>
            <View style={styles.favoriteStoreItemLeftView}>
              <Image style={styles.favoriteStoreItemLeftImage} source={require('../../../assets/ic_cu_replace.png')}/>
              <Text style={styles.favoriteStoreItemLeftText}>노원 CU 편의점</Text>
            </View>
            <View style={styles.favoriteStoreItemRightView}>
              <Image style={styles.favoriteStoreItemRightImage} source={require('../../../assets/ic_star_blue.png')}/>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.favoriteStoreItemTouch}>
            <View style={styles.favoriteStoreItemLeftView}>
              <Image style={styles.favoriteStoreItemLeftImage} source={require('../../../assets/ic_shop_replace.png')}/>
              <Text style={styles.favoriteStoreItemLeftText}>로또 명당</Text>
            </View>
            <View style={styles.favoriteStoreItemRightView}>
              <Image style={styles.favoriteStoreItemRightImage} source={require('../../../assets/ic_star_blue.png')}/>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.favoriteStoreItemTouch}>
            <View style={styles.favoriteStoreItemLeftView}>
              <Image style={styles.favoriteStoreItemLeftImage} source={require('../../../assets/ic_cu_replace.png')}/>
              <Text style={styles.favoriteStoreItemLeftText}>노원 CU 편의점</Text>
            </View>
            <View style={styles.favoriteStoreItemRightView}>
              <Image style={styles.favoriteStoreItemRightImage} source={require('../../../assets/ic_star_blue.png')}/>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.favoriteStoreItemButton}>
            <Text style={styles.favoriteStoreItemButtonText}>접기</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.labelView}>
          <Text style={styles.labelText}>알림 설정</Text>
        </View>
        
        <View style={styles.alertView}>
          <View style={styles.alertMoveNearStoreView}>
            <Text style={styles.alertMoveNearStoreText}>명당 근처 이동시 알림받기</Text>
            <Switch
              style={styles.alertMoveNearStoreSwitch}
              value = {true}/>
          </View>
          <View style={styles.alertEventView}>
            <View style={styles.alertEventLeftView}>
              <Text style={styles.alertEventLeftText}>이벤트/마케팅 알림받기</Text>
              <Text style={styles.alertEventLeftSubText}>마케팅 수신동의 2020년 2월 22일 17시 59분</Text>
            </View>
            <Switch
              style={styles.alertEventSwitch}
              value = {true}/>
          </View>
        </View>
  
        <View style={styles.labelView}>
          <Text style={styles.labelText}>피드백</Text>
        </View>
        
        <View style={styles.feedBackView}>
          <TouchableOpacity>
            <View style={styles.feedBackItemView}>
              <Text style={styles.feedBackItemText}>앱스토어 리뷰 남기기</Text>
              <Image style={styles.feedBackItemImage} source={require('../../../assets/ic_black_arrow_right.png')}/>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <View style={styles.feedBackItemView}>
              <Text style={styles.feedBackItemText}>문의 및 피드백</Text>
              <Image style={styles.feedBackItemImage} source={require('../../../assets/ic_black_arrow_right.png')}/>
            </View>
          </TouchableOpacity>
        </View>
  
        <View style={styles.labelView}>
          <Text style={styles.labelText}>프로모션 & 이벤트</Text>
        </View>
        
        <View style={styles.promotionImageView}>
          <Image style={styles.promotionImage} source={require('../../../assets/ic_logo_promotion.png')} />
        </View>
  
  
        <View style={styles.labelView}>
          <Text style={styles.labelText}>이루다님, 로또투어에만 있는 {"\n"}이벤트를 확인해보세요.</Text>
        </View>
        
        <View style={styles.eventImageView}>
          <Image style={styles.eventImage} source={require('../../../assets/ic_logo_event.png')} />
        </View>
        
        <View style={[{marginBottom: 100}]}>
        </View>
        
  
  
        {/* absolute 이미지*/}
        <Image style={styles.topHeaderSettingImage} />
        <Image style={styles.topHeaderPersonImage} source={require('../../../assets/ic_mypage_man.png')}/>
      </ScrollView>
      
      
    </SafeAreaView>
  )
};

export default MyPageScreen;

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
  },
  
  topHeader: {
    height: deviceHeight * 0.3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'blue',
    paddingLeft: 140,
    paddingTop: deviceHeight * 0.1,
  },
  
  topHeaderTitle: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: 'bold'
  },
  
  topHeaderPlayer: {
    marginTop: 10,
  },
  
  topHeaderPlayerText: {
    color: 'white'
  },
  
  topHeaderPlayerArrowImage: {
  
  },
  
  topHeaderMember: {
  
  },
  
  topHeaderMemberLeftImage: {
  
  },
  
  topHeaderMemberRight: {
  
  },
  
  topHeaderMemberRightText: {
  
  },
  
  topHeaderMemberRightView: {
  
  },
  
  topHeaderMemberRightViewText: {
  
  },
  
  topHeaderMemberRightViewImage: {
  
  },
  
  topHeaderSettingImage: {
  
  },
  
  topHeaderPersonImage: {
    width: 90,
    height: 190,
    resizeMode: 'cover',
    position: 'absolute',
    top: deviceHeight * 0.07,
    left: 20,
    
  },
  
  topHeaderSetting: {
  
  },
  

  winningCountView: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    borderRadius: 15,
    backgroundColor: 'white',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  
  winningCountGrid: {
  },
  
  winningCountTopRow: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#2157f3",
  },
  
  winningCountTopText: {
    paddingTop: 19,
    paddingBottom: 19,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  
  winningCountBottomRow: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    
  },
  
  winningCountBottomText: {
    textAlign: 'center',
    paddingTop: 19,
    paddingBottom: 19,
  },
  
  
  labelView: {
    marginTop: 40,
  },
  
  labelText: {
    fontSize: 18,
    marginLeft: 20,
  },
  
  favoriteStoreView: {
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
 
    backgroundColor: 'white',
    marginTop: 15,
    
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    elevation: 5,
    // marginBottom: 100,
    borderRadius: 15,
  },
  
  favoriteStoreItemTouch: {
    justifyContent: 'space-between',
    height: 54,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    
  },
  
  favoriteStoreItemLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%'
  },
  
  favoriteStoreItemLeftImage: {
    width: 30,
    height: 30,
  },
  
  favoriteStoreItemLeftText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#74798a",
    fontWeight: "600"
    
  },
  
  favoriteStoreItemRightView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  favoriteStoreItemRightImage: {
    width: 16,
    height: 15,
  },
  
  favoriteStoreItemButton: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#EDEDED'
  },
  
  favoriteStoreItemButtonText: {
    fontSize: 14,
    color: "#2157f3",
    fontWeight: "600",
  },
  
  
  alertView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  
    
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    elevation: 5,
    backgroundColor: 'white',
    shadowColor: "#000",
    borderRadius: 15,
  },
  
  alertMoveNearStoreView: {
    height:54,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  
  alertMoveNearStoreText: {
    fontWeight: "600",
    color: "#74798a",
    fontSize: 16,
  },
  
  alertMoveNearStoreSwitch: {
  
  },
  
  alertEventView: {
    height:54,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 9,
  },
  
  alertEventLeftView: {
  
  },
  
  alertEventLeftText: {
    fontWeight: "600",
    color: "#74798a",
    fontSize: 16,
  },
  
  alertEventLeftSubText: {
    color: "#abbdbe",
    fontSize: 12,
  },
  
  alertEventSwitch: {
  
  },
  
  feedBackView: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    elevation: 5,
    backgroundColor: 'white',
    shadowColor: "#000",
    borderRadius: 15,
  },
  
  feedBackItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54,
    paddingLeft: 15,
    paddingRight: 20,
  },
  
  feedBackItemText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#74798a"
  },
  
  feedBackItemImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  
  promotionImageView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  },
  
  promotionImage: {
    width: '100%',
    height: 165,
    resizeMode: 'contain',
  },
  
  eventImageView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  },
  
  eventImage: {
    width: '100%',
    height: 165,
    resizeMode: 'contain',
  }
  
  
  
});

