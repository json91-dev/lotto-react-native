import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MapScreen from './MapScreen';
import SearchStoreScreen from './SearchStoreScreen';

const Stack = createStackNavigator();

function MapStackNavigator () {
  return (
    <Stack.Navigator initialRouteName = "MapScreen">
      <Stack.Screen name="MapScreen" options={{ headerShown: false}} component={MapScreen}/>
      <Stack.Screen name="SearchStoreScreen" options={{ headerShown: false}} component={SearchStoreScreen}/>
    </Stack.Navigator>
  )
}

export default MapStackNavigator;
