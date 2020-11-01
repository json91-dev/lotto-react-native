import Geolocation from '@react-native-community/geolocation';

export const getCurrentPosition = async () => {
  try {
    const position = await Geolocation.getCurrentPosition;
    if (position.coords) {
      const { latitude, longitude } = position.coords;
      return {
        latitude,
        longitude
      };
    }
  
    console.log('현재 위치 검색 결과 : 모바일이 아닙니다.');
    // 문정동의 주소 좌표를 넘겨줌.
    return {
      latitude: 37.4831105026791,
      longitude: 127.125427813036,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
