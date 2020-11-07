import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigation';
import { StatusBar } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
        <AppNavigation />
      </NavigationContainer>
    );
  }
}
