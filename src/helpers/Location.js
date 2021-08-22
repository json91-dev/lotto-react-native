import Geolocation from '@react-native-community/geolocation';

/**
 * geoLocation을 이용하여 현재 위치에 대한 정보를 Promise로 얻어옴.
 * @returns {Promise<any> | Promise}
 */
function getCurrentPositionPromise() {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition((result) => {
      resolve(result);
    }, (error) => {
      reject(error);
    });
  });
}

/**
 * 현재 위치에 대한 latitude, longitude를 반환
 * @returns {Promise<*>}
 */
export const getCurrentPosition = async () => {
  try {
    console.log('getCurrentPostiion 호출');
    const position = await getCurrentPositionPromise();

    if (position.coords) {
      const { latitude, longitude } = position.coords;
      return {
        latitude,
        longitude
      };
    }
    
    return null;
  } catch (error) {
    /** 위치 권한을 못받아 왔을 시 **/
    console.log(error);
    return null;
  }
};
