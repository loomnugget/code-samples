import url from 'url';

const config = {
  WEBSOCKET_HOST: `http://${process.env.DEV_HOSTNAME}:28080/cable`,
  API_SERVER: `http://${process.env.DEV_HOSTNAME}:3005`,
  API_ROOT: url.resolve(`http://${process.env.DEV_HOSTNAME}:3005`, `/`)
};

export default config;
