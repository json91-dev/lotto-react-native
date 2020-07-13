import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SignUpNavigator from './signupscreen/SignUpNavigator';
import MainNavigator from './mainscreen/MainNavigator';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "MainNav">
        <Stack.Screen name="SignUpNav" options={{ headerShown: false }} component={SignUpNavigator}/>
        <Stack.Screen name="MainNav" options={{ headerShown: false }} component={MainNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
