import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

export default class NicknameScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>닉네임을 등록해주세요.</Text>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 10,
  },
});
