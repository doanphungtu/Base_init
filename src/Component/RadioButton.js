import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';

import RadioBox from './RadioBox';
import ButtonMain from './ButtonMain';
import Color from '../Theme/Color';

const RadioButton = ({
  viewContainer,
  viewContainerBox,
  viewChildBox,
  labelStyle,
  select = false,
  sizeContain = 30,
  sizeChild = 15,
  onPress,
  ripple_color = Color.faild,
  label = '',
  color_select = Color.main,
  disabled = false,
}) => {
  return (
    <ButtonMain
      viewButton={[styles.defaultViewContainer, viewContainer]}
      android_ripple={{color: ripple_color}}
      onPress={onPress}
      ripple_color={Color.grey}
      disabled={disabled}>
      <RadioBox
        select={select}
        sizeChild={sizeChild}
        sizeContain={sizeContain}
        viewChild={viewChildBox}
        viewContainer={viewContainerBox}
        color_select={color_select}
      />
      <Text
        style={[
          styles.txtLabel,
          select && {color: color_select},
          label.length && {marginLeft: 10},
          labelStyle,
        ]}>
        {label}
      </Text>
    </ButtonMain>
  );
};

const styles = StyleSheet.create({
  defaultViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtLabel: {
    fontSize: 15,
    color: Color.grey,
  },
});

export default RadioButton;
