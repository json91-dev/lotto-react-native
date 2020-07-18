import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CheckPrizeScreen from './CheckPrizeScreen'
import QRCodeScreen from './QRCodeScreen'

const Stack = createStackNavigator();


function MainNavigator () {
  return (
    <Stack.Navigator initialRouteName = "QRCodeScreen">
      <Stack.Screen name="CheckPrizeScreen" options={{ headerShown: false}} component={CheckPrizeScreen}/>
      <Stack.Screen name="QRCodeScreen" options={{ headerShown: false}} component={QRCodeScreen}/>
    </Stack.Navigator>
  )
}

export default MainNavigator;
