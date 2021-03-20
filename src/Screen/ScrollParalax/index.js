import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Styles
import styles from './styles';

const data = [
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    picture:
      'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1955&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    picture:
      'https://images.unsplash.com/photo-1520848315518-b991dd16a625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    picture:
      'https://images.unsplash.com/photo-1544377747-75ce8da6c699?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=614&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    picture:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    picture:
      'https://images.unsplash.com/photo-1541365110400-283780c7269d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    picture:
      'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    picture:
      'https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    picture:
      'https://images.unsplash.com/photo-1533152162573-93ad94eb20f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    picture:
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2240&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    picture:
      'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
  },
];
const {width, height} = Dimensions.get('window');
const itemWidth = 0.7 * width;
const itemHeight = 1.54 * itemWidth;

const ScrollParalax = ({navigation}) => {
  const renderItem = (item, index) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: [-width * 0.7, 0, width * 0.7],
    });
    return (
      <View
        style={{
          width,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOpacity: 1,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        }}>
        <View
          style={{
            overflow: 'hidden',
            width: itemWidth,
            height: itemHeight,
            alignItems: 'center',
            borderRadius: 16,
          }}>
          <Animated.Image
            source={{uri: item.picture}}
            style={{
              width: itemWidth * 1.4,
              height: itemHeight,
              transform: [{translateX}],
            }}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  };

  let scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={[StyleSheet.absoluteFillObject]}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={`image-${index}`}
              source={{uri: item.picture}}
              style={[StyleSheet.absoluteFillObject, {opacity}]}
              blurRadius={50}
            />
          );
        })}
      </View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => String(index)}
        horizontal
        pagingEnabled
        renderItem={({item, index}) => renderItem(item, index)}
      />
    </View>
  );
};

export default ScrollParalax;
