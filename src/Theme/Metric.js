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
};
export default Metric;
