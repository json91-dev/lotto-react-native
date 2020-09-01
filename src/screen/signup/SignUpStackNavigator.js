import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import React from 'react';
import NicknameScreen from './NicknameScreen'
import AddressScreen from './AddressScreen'

const Stack = createStackNavigator();


function SignUpStackNavigator ({navigation, route}) {
  return (
    <Stack.Navigator initialRouteName = "NicknameScreen">
      <Stack.Screen name="NicknameScreen" options={{title: '닉네임 입력', headerTitleAlign: 'center', headerBackTitle: '', }} component={NicknameScreen}/>
      <Stack.Screen name="AddressScreen" options={{title: '주소 입력', headerTitleAlign: 'center', headerBackTitle: '', headerLeft: (props) => <HeaderBackButton {...props} onPress={() => console.log(navigation.replace('NicknameScreen'))} />}}  component={AddressScreen}/>
    </Stack.Navigator>
  )
}

export default SignUpStackNavigator;
