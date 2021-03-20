import React, {useEffect} from 'react';
import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();
// Styles
import styles from './styles';

const DetailShared = ({navigation, route}) => {
  const {item} = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={styles.txtHeaderTitle}>Detail</Text>,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{paddingLeft: 15}}>
          <MaterialIcons name="arrow-back-ios" size={22} color={'#000'} />
        </TouchableOpacity>
      ),
      headerRight: () => <View />,
    });
  }, [navigation]);
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Image source={{uri: item.image}} style={{flex: 1}} resizeMode="cover" />
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{item.car}</Text>
    </View>
  );
};

export default DetailShared;
