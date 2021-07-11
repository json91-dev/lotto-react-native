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
    const position = await getCurrentPositionPromise();

    if (position.coords) {
      const { latitude, longitude } = position.coords;
      return {
        latitude,
        longitude
      };
    }
    
    console.error('gerCurrentPosition 에러 발생');
    return null;
    
    /*문정동의 주소 좌표를 넘겨줌.
    return {
      latitude: 37.4831105026791,
      longitude: 127.125427813036,
    };*/
  } catch (error) {
    console.error(error)
    return null;
    
    /* 문정동 주소
    return {
      latitude: 37.4831105026791,
      longitude: 127.125427813036,
    };*/
  }
};
