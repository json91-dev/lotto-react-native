// 문자: 2byte, 영문 숫자: 1byte
import { Dimensions, PixelRatio, Platform } from 'react-native';

export const getByte = (str) => {
  return str
    .split('')
    .map(s => s.charCodeAt(0))
    .reduce((prev, c) => (prev + ((c === 10) ? 2 : ((c >> 7) ? 2 : 1))), 0);
};

export const isEmpty = function (value) {
  if (value === '' || value === null || value === undefined || (value !== null && typeof value === 'object' && !Object.keys(value).length)) {
    return true;
  }
    return false;
};

export const getFontSize = () => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const scale = screenWidth / 1440; // 기준 넓이 1440
  
  const newSize = 52 * scale;
  let result= 0;
  if (Platform.OS === 'ios') {
    result =  Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    result =  Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
  
  return result;
};

export const findDimention = (layout) => {
  const {x, y, width, height} = layout;
  console.warn(x);
  console.warn(y);
  console.warn(width);
  console.warn(height);
};
