import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapStackNavigator from './map/MapStackNavigator';
import MainStackNavigator from './main/MainStackNavigator';
import MyPageStackNavigator from './mypage/MyPageStackNavigator';
const Tab = createBottomTabNavigator();
import {
  Image,
} from 'react-native';

const setBottomIconImagePath = (navName, focused) => {
  // const key = navName + (focused? 'Focus': '');
  
  const imagePath = {
    MainStackNavigator: require('../../assets/ic_lens.png'),
    MapStackNavigator: require('../../assets/ic_pin.png'),
    MyPageStackNavigator: require('../../assets/ic_more.png'),
  };
  
  return imagePath[navName];
};



function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="MainStackNavigator"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconPath = setBottomIconImagePath(route.name, focused);
          // You can return any component that you like here!
          return <Image style={{width: 25, height: 25, marginTop: 10}} source={iconPath}/>;
        },
      })}
      
      tabBarOptions={{
        style: {
          height: 60,
        }
      }}
    >
      <Tab.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
        options = {({route}) => ({
          tabBarLabel: '',
        })}
      />
      <Tab.Screen
        name="MapStackNavigator"
        component={MapStackNavigator}
        options = {({route}) => ({
          tabBarLabel: '',
        })}
      />
      <Tab.Screen
        name="MyPageStackNavigator"
        component={MyPageStackNavigator}
        options={{
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator;
