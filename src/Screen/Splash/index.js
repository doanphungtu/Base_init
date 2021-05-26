import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {Images, Metric, Color} from '../../Theme';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('TabNav');
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={Images.splashScreen}
        style={{flex: 1, width: Metric.size.width}}
        resizeMode="cover"
      />
    </View>
  );
};

export default Splash;
