import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SignUpStackNavigator from './signup/SignUpStackNavigator';
import BottomNavigator from './bottom/BottomNavigator';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "BottomNavigator">
        <Stack.Screen name="SignUpNavigator" options={{ headerShown: false }} component={SignUpStackNavigator}/>
        <Stack.Screen name="BottomNavigator" options={{ headerShown: false }} component={BottomNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
