import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Color from '../Theme/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

///////////////Screen/////////////////////
import Test from '../Screen/Test';
import Home from '../Screen/Home';
import Splash from '../Screen/Splash';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav(props) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          const routeName = route.name;
          let element;
          let size = 20;
          if (routeName === 'Home') {
            element = (
              <FontAwesome
                name="home"
                size={size}
                color={focused ? Color.main : 'grey'}
              />
            );
          } else if (routeName === 'Home1') {
            element = (
              <FontAwesome
                name="home"
                size={size}
                color={focused ? Color.main : 'grey'}
              />
            );
          } else if (routeName === 'Home2') {
            element = (
              <FontAwesome
                name="home"
                size={size}
                color={focused ? Color.main : 'grey'}
              />
            );
          } else if (routeName === 'Home3') {
            element = (
              <FontAwesome
                name="home"
                size={size}
                color={focused ? Color.main : 'grey'}
              />
            );
          }
          return element;
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.main,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        navigationOptions={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name="Home1"
        component={Home}
        navigationOptions={{tabBarLabel: 'Tiện ích'}}
      />
      <Tab.Screen
        name="Home2"
        component={Home}
        navigationOptions={{tabBarLabel: 'Kiếm xu'}}
      />
      <Tab.Screen
        name="Home3"
        component={Home}
        navigationOptions={{tabBarLabel: 'Thông báo'}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Stack.Navigator initialRouteName="Test" headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
}

export default App;
