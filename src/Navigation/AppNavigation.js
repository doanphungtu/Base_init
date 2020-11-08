import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CheckNotification from '../Screen/CheckNotification';
import SplashScreen from '../Screen/SplashScreen';
import Home from '../Screen/Home';
import Notification from '../Screen/Notification';
import EarnCoin from '../Screen/EarnCoin';
import Personal from '../Screen/Personal';
import Utilities from '../Screen/Utilities';

import Images from '../Theme/Images';
import {Image} from 'react-native';
import Color from '../Theme/Color';
import TestScreen from '../Screen/TestScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav(props) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarVisible: getTabBarVisible(route),
        tabBarIcon: ({focused, color}) => {
          const routeName = route.name;
          let url;
          let size = 20;
          if (routeName === 'Home') {
            url = focused ? Images.homeC : Images.home;
          } else if (routeName === 'Utilities') {
            url = focused ? Images.ultitiC : Images.ultiti;
          } else if (routeName === 'EarnCoins') {
            url = focused ? Images.earncoinC : Images.earncoin;
            size = 28;
          } else if (routeName === 'Notification') {
            url = focused ? Images.notificationC : Images.notification;
          } else if (routeName === 'Personal') {
            url = focused ? Images.personalC : Images.personal;
          }
          return <Image source={url} style={{width: size, height: size}} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.main,
        inactiveTintColor: 'gray',
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          height: 60,
        },
        tabStyle: {
          paddingVertical: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        navigationOptions={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name="Utilities"
        component={Utilities}
        navigationOptions={{tabBarLabel: 'Tiện ích'}}
      />
      <Tab.Screen
        name="EarnCoins"
        component={EarnCoin}
        navigationOptions={{tabBarLabel: 'Kiếm xu'}}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        navigationOptions={{tabBarLabel: 'Thông báo'}}
      />
      <Tab.Screen
        name="Personal"
        component={Personal}
        navigationOptions={{tabBarLabel: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Stack.Navigator initialRouteName="Test" headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="CheckNotification" component={CheckNotification} />
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
}

export default App;
