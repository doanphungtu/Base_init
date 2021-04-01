import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/index';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';

const App = () => {
  // const linking = {
  //   prefixes: ['demo://myapp'],
  // };
  return (
    <Provider store={store}>
      <NavigationContainer
        linking={{
          prefixes: ['demo://myapp'],
        }}
        fallback={<Text>Loading...</Text>}>
        <SafeAreaView style={{flex: 1}}>
          <AppNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
