import React, {useEffect} from 'react';
import {Button, Image, Text, View} from 'react-native';
import DropdownModal from '../../Component/DropdownModal';

// Actions
import TestAction from '../../Redux/TestRedux';
// Styles
import styles from './styles';

const Test = ({navigation}) => {
  return (
    <View style={styles.container}>
      <DropdownModal
        options={['a', 'b']}
        buttonStyle={{width: 100}}
        dropdownStyle={{width: 100}}
      />
    </View>
  );
};

export default Test;
