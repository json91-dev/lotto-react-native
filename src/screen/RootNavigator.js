import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpStackNavigator from './signup/SignUpStackNavigator';
import BottomNavigator from './bottom/BottomNavigator';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "SignUpNavigator">
        <Stack.Screen name="SignUpNavigator" options={{ headerShown: false }} component={SignUpStackNavigator}/>
        <Stack.Screen name="BottomNavigator" options={{ headerShown: false }} component={BottomNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
