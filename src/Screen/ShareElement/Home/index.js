import React, {useEffect} from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Color from '../../../Theme/Color';

// Styles
import styles from './styles';

const data = [
  {
    key: '1',
    image:
      'https://images.unsplash.com/photo-1571025622206-bc874e5d7dd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    car: 'Car 1',
  },
  {
    key: '2',
    image:
      'https://images.unsplash.com/photo-1562716190-5c19488ea1fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2102&q=80',
    car: 'Car 2',
  },
  {
    key: '3',
    image:
      'https://images.unsplash.com/photo-1579508542697-bb18e7d9aeaa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3150&q=80',
    car: 'Car 3',
  },
  {
    key: '4',
    image:
      'https://images.unsplash.com/photo-1572112533098-2785b64123da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1778&q=80',
    car: 'Car 4',
  },
  {
    key: '5',
    image:
      'https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80',
    car: 'Car 4',
  },
];

const HomeShared = ({navigation}) => {
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: '5%',
          backgroundColor: Color.bg_item,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('DetailShared', {item: item})}>
        <Image
          source={{uri: item.image}}
          resizeMode="contain"
          style={{width: 150, height: 150}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.car}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{
          paddingHorizontal: '5%',
        }}
        data={data}
        keyExtractor={(item, index) => item.key}
        renderItem={({item, index}) => renderItem(item, index)}
      />
    </View>
  );
};

export default HomeShared;
