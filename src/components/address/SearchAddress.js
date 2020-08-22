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
  const [addressFlatItems, setAddressFlatItems] = React.useState([]);
  
  /**
   * useEffect
   *
   * 1. 주소값을 가진 배열을 입력받는다.
   * 2. 해당 배열을 selected 값을 포함시킨 objectItems로 변환시켜준다.
   */

  const { addressList } = props;
  useEffect(() => {
    console.log('userEffect 수행');
  
      let updateAddressItems = [...addressList];
  
      updateAddressItems =  updateAddressItems.map((item, index) => {
        return {address_name: item.address_name, index: index, selected: false};
      });
      
      console.log(updateAddressItems)

      setAddressFlatItems(updateAddressItems);
  
  }, [addressList]);

  /**
   * 주소 Item이 클릭되었을때 동작하는 함수.
   */
  // const onAddressItemPressed = (item, index) => () => {
  //   let updateAddressItems = [...addressItems];
  //
  //   updateAddressItems.map((item) => {
  //     if (item.index === index) {
  //       item.selected = true;
  //     } else {
  //       item.selected = false;
  //     }
  //
  //     return item;
  //   });
  //
  //   setAddressItems(updateAddressItems);
  //
  //   props.selectAddressItem();
  // };


  return (
    <View style={styles.container}>
      <FlatList
        style={styles.addressFlat}
        data={addressFlatItems}
        keyExtractor={(item,index) => item + index}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.addressTouch}
              // onPress={onAddressItemPressed(item, index)}
            >
              <Text>{item.address_name}</Text>
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
  const { isAddressSelected, selectedAddressItem, addressList} = address;

  return {
    isAddressSelected,
    selectedAddressItem,
    addressList
  }
};

export default connect(
  mapStateToProps,
  {selectAddressItem, deselectAddressItem,}
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
