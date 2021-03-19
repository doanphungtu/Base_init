import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/index';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <AppNavigation />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    );
  }
}
