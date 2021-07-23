import config from './config.json';

const ENV_MAP = {
  development: {
    API_URL: "http://172.30.1.100:3000"
  },
  production: {
    API_URL: "https://lottotour.xyz"
  }
};

export default ENV_MAP[config.REACT_NATIVE_ENV] || ENV_MAP.development;
