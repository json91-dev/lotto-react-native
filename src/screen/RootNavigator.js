import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SignUpNavigator  from './signupscreen/SignUpNavigator';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "SignUpNav">
        <Stack.Screen name="SignUpNav" options={{ headerShown: false }} component={SignUpNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
