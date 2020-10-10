import React, {Component, useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

const SettingScreen = () => {
  
  useEffect(() => {
  
  }, []);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>설정</Text>
      </View>
      
      <View style={styles.labelView}>
        <Text style={styles.labelText}>이용 안내</Text>
      </View>
      
      <View style={[styles.itemContainerView,{marginBottom: 25,}]}>
        <TouchableOpacity style={styles.itemTouch}>
          <Text style={styles.itemText}>서비스 이용약관</Text>
          <Image style={styles.itemImage} source={require('../../../assets/ic_black_arrow_right.png')}/>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.itemTouch}>
          <Text style={styles.itemText}>개인 정보 처리 방침</Text>
          <Image style={styles.itemImage} source={require('../../../assets/ic_black_arrow_right.png')}/>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.itemTouch}>
          <Text style={styles.itemText}>위치기반 서비스 이용 약관</Text>
          <Image style={styles.itemImage} source={require('../../../assets/ic_black_arrow_right.png')}/>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.itemTouch}>
          <Text style={styles.itemText}>유료 결제 이용 약관</Text>
          <Image style={styles.itemImage} source={require('../../../assets/ic_black_arrow_right.png')}/>
        </TouchableOpacity>
      </View>
  
      <View style={styles.labelView}>
        <Text style={styles.labelText}>기타</Text>
      </View>
  
      <View style={styles.itemContainerView}>
        <TouchableOpacity style={styles.itemTouch}>
          <Text style={styles.itemText}>서비스 이용약관</Text>
          <Image style={styles.itemImage} source={require('../../../assets/ic_black_arrow_right.png')}/>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.itemTouch}>
          <Text style={styles.itemText}>개인 정보 처리 방침</Text>
          <Image style={styles.itemImage} source={require('../../../assets/ic_black_arrow_right.png')}/>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.itemTouch}>
          <Text style={styles.itemText}>위치기반 서비스 이용 약관</Text>
          <Image style={styles.itemImage} source={require('../../../assets/ic_black_arrow_right.png')}/>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.itemTouch}>
          <Text style={styles.itemText}>유료 결제 이용 약관</Text>
          <Image style={styles.itemImage} source={require('../../../assets/ic_black_arrow_right.png')}/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.promotionImageView}>
        <Image style={styles.promotionImage} source={require('../../../assets/ic_logo_promotion.png')} />
      </View>
      
    </ScrollView>
  );
};

export default SettingScreen;

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
    flex: 1,
  },
  
  titleView: {
    marginTop: 20,
    marginLeft: 20,
  },
  
  titleText: {
    fontSize: 34,
    fontWeight: "600",
    color: "#3b3f4a"
  },
  
  labelView: {
    marginLeft: 20,
    marginTop: 25,
  },
  
  labelText: {
    fontSize: 18,
    color: "#abbdbe"
  },
  
  itemContainerView: {
    marginTop: 20,
  },
  
  itemTouch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 19,
    paddingBottom: 19,
    borderBottomWidth: 1,
    borderColor: '#EDEDED'
  },
  
  itemText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#74798a",
  },
  
  itemImage: {
    width: 16,
    height: 16,
    resizeMode: 'cover'
  },
  
  promotionImageView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 60,
  },
  
  promotionImage: {
    width: '100%',
    height: 165,
    resizeMode: 'contain',
  }
 
});
