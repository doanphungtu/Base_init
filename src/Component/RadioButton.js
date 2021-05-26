import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native';

import RadioBox from './RadioBox';
import {Color} from '../Theme';

const RadioButton = ({
  viewButtonStyle,
  buttonStyle,
  viewContainerBox,
  viewChildBox,
  labelStyle,
  select = false,
  sizeContain = 30,
  sizeChild = 15,
  onPress,
  label = '',
  activeColor = Color.main,
  disabled = false,
}) => {
  return (
    <View style={[styles.defaultViewButtonStyle, viewButtonStyle]}>
      <TouchableOpacity
        style={[styles.defaultButtonStyle, buttonStyle]}
        onPress={onPress}
        disabled={disabled}>
        <RadioBox
          select={select}
          sizeChild={sizeChild}
          sizeContain={sizeContain}
          viewChild={viewChildBox}
          viewContainer={viewContainerBox}
          activeColor={activeColor}
        />
        <Text
          style={[
            styles.defaultLabelStyle,
            select && {color: activeColor},
            label.length && {marginLeft: 10},
            labelStyle,
          ]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultViewButtonStyle: {
    backgroundColor: Color.halfGrey,
  },
  defaultButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  defaultLabelStyle: {
    fontSize: 15,
    color: Color.grey,
  },
});

export default RadioButton;
