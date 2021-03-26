import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Color from '../Theme/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

///////////////Screen/////////////////////
import Test from '../Screen/Test';
import Home from '../Screen/Home';
import Splash from '../Screen/Splash';
import HomeShared from '../Screen/ShareElement/Home';
import DetailShared from '../Screen/ShareElement/Detail';
import SkeletonPlaceholder from '../Screen/SkeletonPlaceholder';
import ScrollAnimation from '../Screen/ScrollAnimation';
import ScrollParalax from '../Screen/ScrollParalax';
import ReactnativeReanimated from '../Screen/ReactnativeReanimted';

const Stack = createSharedElementStackNavigator();
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
    <Stack.Navigator initialRouteName="ReactnativeReanimated">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen
        name="ReactnativeReanimated"
        component={ReactnativeReanimated}
      />
      <Stack.Screen name="ScrollParalax" component={ScrollParalax} />
      <Stack.Screen name="ScrollAnimation" component={ScrollAnimation} />
      <Stack.Screen
        name="SkeletonPlaceholder"
        component={SkeletonPlaceholder}
      />
      <Stack.Screen name="HomeShared" component={HomeShared} />
      <Stack.Screen
        name="DetailShared"
        component={DetailShared}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const {item} = route.params;
          return [
            {
              id: `item.${item.id}.image_url`,
              animation: 'move',
              resize: 'clip',
            },
            {
              id: `item.${item.id}.title`,
              animation: 'move',
              resize: 'clip',
            },
            {
              id: `item.${item.id}.description`,
              animation: 'fade',
              resize: 'clip',
            },
            {
              id: `item.${item.id}.iconName`,
              animation: 'move',
              resize: 'clip',
            },
          ];
        }}
        options={{
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
