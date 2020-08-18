import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MyPageScreen from './MyPageScreen';
import SettingScreen from './SettingScreen';

const Stack = createStackNavigator();


function MyPageStackNavigator () {
  return (
    <Stack.Navigator initialRouteName = "MyPageScreen">
      <Stack.Screen name="MyPageScreen" options={{ headerShown: false}} component={MyPageScreen}/>
      <Stack.Screen name="SettingScreen" options={{headerTitle: '', headerBackTitle: ''}} component={SettingScreen}/>
    </Stack.Navigator>
  )
}

export default MyPageStackNavigator;
