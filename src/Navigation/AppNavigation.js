import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckNotification from '../Screen/CheckNotification';
import SplashScreen from '../Screen/SplashScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="CheckNotification" component={CheckNotification} />
    </Stack.Navigator>
  );
}

export default App;
