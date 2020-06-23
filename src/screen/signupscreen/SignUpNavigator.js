import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import NicknameScreen from './NicknameScreen'
import AddressScreen from './AddressScreen'

const Stack = createStackNavigator();


function MainScreenNavigator () {
  return (
    <Stack.Navigator initialRouteName = "NicknameScreen">
      <Stack.Screen name="NicknameScreen" options={{title: '앱 버전', headerTitleAlign: 'center', headerBackTitle: '', headerShown: false}} component={NicknameScreen}/>
      <Stack.Screen name="AddressScreen" options={{title: '프로필 수정', headerTitleAlign: 'center', headerBackTitle: '',}} component={AddressScreen}/>
    </Stack.Navigator>
  )
}

export default MainScreenNavigator;
