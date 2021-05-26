import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Metric = {
  size: {
    width: width,
    height: height,
  },
  fontSize: {
    small: 13,
    regular: 15,
    large: 20,
  },
  variable: {
    activeOpacity: 0.5,
  },
};
export default Metric;
