import React, {useEffect} from 'react';
import {
  Button,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Color from '../../Theme/Color';

// Styles
import styles from './styles';

const Test = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => Linking.openURL('demo://myapp/ReactnativeReanimated')}
        style={{
          width: 120,
          height: 50,
          backgroundColor: Color.main,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Test</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Test;
