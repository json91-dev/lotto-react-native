import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MyPageScreen from './MyPageScreen'

const Stack = createStackNavigator();


function MyPageStackNavigator () {
  return (
    <Stack.Navigator initialRouteName = "MyPageScreen">
      <Stack.Screen name="MyPageScreen" options={{ headerShown: false}} component={MyPageScreen}/>
    </Stack.Navigator>
  )
}

export default MyPageStackNavigator;
