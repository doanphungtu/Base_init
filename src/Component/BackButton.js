import React from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Color from '../Theme/Color';

const sizeDefault = Platform.OS == 'android' ? 40 : 30;

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{
        width: sizeDefault,
        height: sizeDefault,
      }}
      onPress={() => {
        navigation.goBack();
      }}>
      <FontAwesome5 name="chevron-left" size={24} color={Color.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default BackButton;
