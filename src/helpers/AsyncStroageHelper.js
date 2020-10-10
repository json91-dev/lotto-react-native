import AsyncStorage from '@react-native-community/async-storage';
import {isEmpty} from './Utils';

// 아무값도 들어있지 않으면 빈 배열을 반환합니다.
export const getItemFromAsync = (storageName) => {
  if (isEmpty(storageName)) {
    throw Error('Storage Name is empty');
  }
  
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(storageName, (err, result) => {
      if (err) {
        reject(err);
      }
      
      if (result === null) {
        resolve(null);
      }
      
      resolve(JSON.parse(result));
    });
  });
};

export const setItemToAsync = (storageName, item) => {
  if (isEmpty(storageName)) {
    throw Error('Storage Name is empty');
  }

  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(storageName, JSON.stringify(item), (error) => {
      if (error) {
        reject(error);
      }
      
      resolve('입력 성공');
    });
  });
};
