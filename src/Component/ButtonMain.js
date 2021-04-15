import React from 'react';
import {StyleSheet, Platform, Pressable, View} from 'react-native';
import Color from '../Theme/Color';

const ButtonMain = ({
  viewContainer,
  viewButton,
  children,
  onPress,
  ripple_color = Color.grey,
  disabled = false,
  onLayout,
}) => {
  return (
    <View style={[styles.defaultViewContainer, viewContainer]}>
      <Pressable
        style={[styles.defaultViewButton, viewButton]}
        android_ripple={{color: ripple_color}}
        onPress={onPress}
        disabled={disabled}
        onLayout={onLayout}>
        {children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultViewContainer: {
    overflow: 'hidden',
  },
  defaultViewButton: {
    flex: 1,
  },
});

export default ButtonMain;
