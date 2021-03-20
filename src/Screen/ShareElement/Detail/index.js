import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
SimpleLineIcons.loadFont();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();
import {SharedElement} from 'react-navigation-shared-element';

const {height} = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.5;

const DetailShared = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: '#0f0f0f'}}>
      <SharedElement id={`item.${item.id}.image_url`}>
        <Image
          source={{uri: item.image_url}}
          style={{
            width: '100%',
            height: ITEM_HEIGHT,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          resizeMode="cover"
        />
      </SharedElement>
      <View
        style={{flexDirection: 'row', marginTop: 10, paddingHorizontal: 20}}>
        <SharedElement id={`item.${item.id}.iconName`}>
          <SimpleLineIcons size={40} color="white" name={item.iconName} />
        </SharedElement>
        <View style={{flexDirection: 'column', paddingLeft: 6}}>
          <SharedElement id={`item.${item.id}.title`}>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                lineHeight: 28,
              }}>
              {item.title}
            </Text>
          </SharedElement>
          <SharedElement id={`item.${item.id}.description`}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                lineHeight: 18,
              }}>
              {item.description}
            </Text>
          </SharedElement>
        </View>
      </View>
      <ScrollView
        indicatorStyle="white"
        style={{
          paddingHorizontal: 20,
          backgroundColor: '#0f0f0f',
        }}
        contentContainerStyle={{paddingVertical: 20}}>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            lineHeight: 24,
            marginBottom: 4,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            lineHeight: 24,
            marginBottom: 4,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  );
};
export default DetailShared;
