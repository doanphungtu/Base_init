import React, {useEffect} from 'react';
import {Button, Image, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// Styles
import styles from './styles';

const SkeletonPlaceholder = ({navigation}) => {
  return (
    <SkeletonPlaceholder speed={1000}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 60, height: 60, borderRadius: 50}} />
        <View style={{marginLeft: 20}}>
          <View style={{width: 120, height: 20, borderRadius: 4}} />
          <View
            style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
          />
        </View>
      </View>
      <View style={{height: 80}}></View>
    </SkeletonPlaceholder>
  );
};

export default SkeletonPlaceholder;
