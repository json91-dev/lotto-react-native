import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  selectAddressItem,
  deselectAddressItem,
} from "../../redux/actions";


const AddressSearch = (props) =>{
  const [addressItems, setAddressItems] = React.useState('');

  /**
   * useEffect
   *
   * 1. 주소값을 가진 배열을 입력받는다.
   * 2. 해당 배열을 selected 값을 포함시킨 objectItems로 변환시켜준다.
   */

  useEffect(() => {
    const addressArray = [
      '서울 강남구 신사동',
      '서울 관악구 가좌동',
      '서울 은평구 신사동',
      '서울 양천구 신정동',
      '경기도 하남시 신장동'
    ];

    const addressItems = addressArray.map((item, index) => {
      return {
        selected: false,
        address: item,
        index,
      }
    });

    setAddressItems(addressItems);
  }, []);

  /**
   * 주소 Item이 클릭되었을때 동작하는 함수.
   */
  const onAddressItemPressed = (item, index) => () => {
    let updateAddressItems = [...addressItems];

    updateAddressItems.map((item) => {
      if (item.index === index) {
        item.selected = true;
      } else {
        item.selected = false;
      }

      return item;
    });

    setAddressItems(updateAddressItems);

    props.selectAddressItem();
  };


  return (
    <View style={styles.container}>
      <FlatList
        style={styles.addressFlat}
        data={addressItems}
        keyExtractor={(item,index) => item + index}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.addressTouch}
              onPress={onAddressItemPressed(item, index)}
            >
              <Text>{item.address}</Text>
              {
                (item.selected === true)
                  ? <Image style={styles.circleImage} source={require('../../assets/ic_circle_select_on.png')}/>
                  : <Image style={styles.circleImage} source={require('../../assets/ic_circle_cancel_on.png')}/>
              }

            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const mapStateToProps = ({address}) =>{
  const { isAddressSelected, selectedAddressItem, addressItems } = address;

  return {
    isAddressSelected,
    selectedAddressItem,
    addressItems
  }
};

export default connect(
  mapStateToProps,
  {selectAddressItem, deselectAddressItem}
)(AddressSearch)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 11,
    paddingLeft: 20,
    paddingRight: 20,
  },

  addressFlat: {

  },

  addressTouch: {
    paddingTop: 15,
    paddingBottom:15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },

  circleImage: {
    width: 16,
    height: 16,
    resizeMode: 'cover'
  }

});