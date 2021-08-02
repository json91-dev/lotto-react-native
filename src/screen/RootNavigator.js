import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MapStackNavigator from './map/MapStackNavigator';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "MapStackNavigator">
        <Stack.Screen name="MapStackNavigator" options={{ headerShown: false }} component={MapStackNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
