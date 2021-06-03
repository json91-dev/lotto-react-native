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

export const getDistance = (lat1, lon1, lat2, lon2) => {
  if ((lat1 === lat2) && (lon1 === lon2))
    return 0;
  
  var radLat1 = Math.PI * lat1 / 180;
  var radLat2 = Math.PI * lat2 / 180;
  var theta = lon1 - lon2;
  var radTheta = Math.PI * theta / 180;
  var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
  if (dist > 1)
    dist = 1;
  
  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515 * 1.609344 * 1000;
  // if (dist < 100) dist = Math.round(dist / 10) * 10;
  // else dist = Math.round(dist / 100) * 100;
  // else dist = Math.round(dist / 10) * 10;
  
  return Math.round(dist);
}
