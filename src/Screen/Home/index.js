import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Images, Metric} from '../../Theme';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './styles';

const Home = ({navigation}) => {
  const {t, i18n} = useTranslation();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.navigation.navigate('ChooseCityScreen');
  //     }, 3000);
  //   }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        onPress={() => {
          i18n.changeLanguage(i18n.language != 'vi' ? 'vi' : 'en');
        }}>
        <Text style={{fontSize: Metric.fontSize.regular}}>
          {t('example.labels.change_language')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
