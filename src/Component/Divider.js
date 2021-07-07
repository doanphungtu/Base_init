import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Color} from '../Theme';

const Divider = ({style, color = Color.lightGrey}) => {
  return (
    <View style={[styles.defaultStyle, style, {backgroundColor: color}]} />
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    height: 1,
  },
});

export default Divider;
