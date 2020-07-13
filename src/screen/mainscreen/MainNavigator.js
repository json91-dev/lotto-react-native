import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CheckPrizeScreen from './CheckPrizeScreen'

const Stack = createStackNavigator();


function MainNavigator () {
  return (
    <Stack.Navigator initialRouteName = "NicknameScreen">
      <Stack.Screen name="CheckPrizeScreen" options={{ headerShown: false}} component={CheckPrizeScreen}/>
    </Stack.Navigator>
  )
}

export default MainNavigator;
