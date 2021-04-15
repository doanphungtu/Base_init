import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ButtonMain from './ButtonMain';
import Color from '../Theme/Color';

const BackButton = ({navigation}) => {
  return (
    <ButtonMain
      viewContainer={{
        width: 50,
        height: 50,
        borderRadius: 50,
      }}
      viewButton={{justifyContent: 'center', alignItems: 'center'}}
      onPress={() => {
        navigation.goBack();
      }}
      ripple_color={Color.grey}>
      <FontAwesome5 name="chevron-left" size={24} color={Color.white} />
    </ButtonMain>
  );
};

const styles = StyleSheet.create({});

export default BackButton;
