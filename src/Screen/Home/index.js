import React, {useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Images from '../../Theme/Images';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './styles';

const Home = ({navigation}) => {
  const data = [
    {
      name: 'Skeleton placeHolder',
      onClick: () => navigation.navigate('SkeletonPlaceholder'),
    },
    {name: 'Shared Element', onClick: () => navigation.navigate('HomeShared')},
    {
      name: 'ScrollAnimation',
      onClick: () => navigation.navigate('ScrollAnimation'),
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={String(index)}
            style={{
              width: '90%',
              alignSelf: 'center',
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
            }}
            onPress={() => item.onClick()}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
