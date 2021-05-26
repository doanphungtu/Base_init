import React, {useEffect} from 'react';
import {Button, Image, Text, View} from 'react-native';

// Actions
import TestAction from '../../Redux/TestRedux';
// Styles
import styles from './styles';

const Test = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>{'Test'}</Text>
      <Button title="Click" />
    </View>
  );
};

export default Test;
