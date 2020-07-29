import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CheckPrizeScreen from './CheckPrizeScreen';
import QRCodeScreen from './QRCodeScreen';
import MapScreen from './MapScreen';

const Stack = createStackNavigator();


function MainNavigator () {
  return (
    <Stack.Navigator initialRouteName = "CheckPrizeScreen">
      <Stack.Screen name="CheckPrizeScreen" options={{ headerShown: false}} component={CheckPrizeScreen}/>
      <Stack.Screen name="QRCodeScreen" options={{ headerShown: false}} component={QRCodeScreen}/>
      <Stack.Screen name="MapScreen" options={{ headerShown: false}} component={MapScreen}/>
    </Stack.Navigator>
  )
}

export default MainNavigator;
