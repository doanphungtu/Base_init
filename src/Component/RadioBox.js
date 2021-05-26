import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Color} from '../Theme';

const RadioBox = ({
  viewContainer,
  viewChild,
  select = false,
  sizeContain = 30,
  sizeChild,
  activeColor,
}) => {
  return (
    <View
      style={[
        styles.defaultViewContainer,
        {width: sizeContain, height: sizeContain},
        select && {borderColor: activeColor},
        viewContainer,
      ]}>
      <View
        style={[
          {width: sizeChild, height: sizeChild, borderRadius: sizeChild},
          select && {backgroundColor: activeColor},
          viewChild,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultViewContainer: {
    borderWidth: 2,
    borderColor: Color.grey,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RadioBox;
