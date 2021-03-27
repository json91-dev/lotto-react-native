import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MapScreen from './MapScreen';

const Stack = createStackNavigator();

function MapStackNavigator () {
  return (
    <Stack.Navigator initialRouteName = "MapScreen">
      <Stack.Screen name="MapScreen" options={{ headerShown: false}} component={MapScreen}/>
    </Stack.Navigator>
  );
}

export default MapStackNavigator;
