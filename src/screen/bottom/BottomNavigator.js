import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image,
} from 'react-native';
import MapStackNavigator from './map/MapStackNavigator';
import MainStackNavigator from './main/MainStackNavigator';
import MyPageStackNavigator from './mypage/MyPageStackNavigator';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="MainStackNavigator"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconPath = null;
          if (route.name === 'MainStackNavigator') {
            iconPath = focused
              ? require('../../assets/ic_lens_active.png')
              : require('../../assets/ic_lens_inactive.png');
          } else if (route.name === 'MapStackNavigator') {
            iconPath = focused
              ? require('../../assets/ic_pin_active.png')
              : require('../../assets/ic_pin_inactive.png');
          } else if (route.name === 'MyPageStackNavigator') {
            iconPath = focused
              ? require('../../assets/ic_more_inactive.png')
              : require('../../assets/ic_more_inactive.png');
          }
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
        options = {() => ({
          tabBarLabel: '',
        })}
      />
      <Tab.Screen
        name="MapStackNavigator"
        component={MapStackNavigator}
        options = {() => ({
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
  );
}

export default BottomNavigator;
