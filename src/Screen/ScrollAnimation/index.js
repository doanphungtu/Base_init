import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Item, {MAX_HEIGHT} from './Item';

const data = [
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    top: 0,
    picture:
      'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1955&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    top: 0,
    picture:
      'https://images.unsplash.com/photo-1520848315518-b991dd16a625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    top: 0,
    picture:
      'https://images.unsplash.com/photo-1544377747-75ce8da6c699?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=614&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    top: 0,
    picture:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    top: 0,
    picture:
      'https://images.unsplash.com/photo-1541365110400-283780c7269d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    top: 0,
    picture:
      'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    top: 0,
    picture:
      'https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    top: 50,
    picture:
      'https://images.unsplash.com/photo-1533152162573-93ad94eb20f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    top: 0,
    picture:
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2240&q=80',
  },
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    top: 0,
    picture:
      'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
  },
];

const ScrollAnimation = ({navigation}) => {
  const y = useRef(new Animated.Value(0)).current;
  return (
    <Animated.ScrollView
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: y}}}], {
        useNativeDriver: false,
      })}
      scrollEventThrottle={16}
      snapToInterval={MAX_HEIGHT}>
      <Animated.View style={styles.container}>
        {data.map((item, index) => (
          <Item item={item} key={String(index)} y={y} index={index} />
        ))}
      </Animated.View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: (data.length + 1) * MAX_HEIGHT,
    backgroundColor: 'black',
  },
});

export default ScrollAnimation;
