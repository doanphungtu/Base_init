import React from 'react';
import {StyleSheet, Dimensions, Alert, View, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');
const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height / 2;
const styles = StyleSheet.create({
  container: {
    width,
    height: MIN_HEIGHT,
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '500',
  },
  titleContainer: {
    maxHeight: MAX_HEIGHT * 0.61,
    justifyContent: 'center',
    flex: 1,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    padding: 32,
    transform: [{translateY: 64}],
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const Item = ({y, index, item}) => {
  const {title, subtitle, picture, top} = item;

  const heightAN = y.interpolate({
    inputRange: [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
    outputRange: [MIN_HEIGHT, MAX_HEIGHT],
    extrapolate: 'clamp',
  });
  const opacityAN = y.interpolate({
    inputRange: [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const topAN = y.interpolate({
    inputRange: [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
    outputRange: [-top, 0],
    extrapolate: 'clamp',
  });

  return (
    <TouchableWithoutFeedback onPress={() => Alert.alert('Pressed!')}>
      <Animated.View style={[styles.container, {height: heightAN}]}>
        <Animated.Image
          source={{uri: picture}}
          style={[styles.picture, {height: MAX_HEIGHT, top: topAN}]}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
          <View style={styles.mainTitle}>
            <Animated.View style={{opacity: opacityAN}}>
              <Text style={styles.title}>{title.toUpperCase()}</Text>
            </Animated.View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Item;
