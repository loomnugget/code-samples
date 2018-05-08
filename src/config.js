import url from 'url';

const config = {
  API_SERVER: `http://${process.env.DEV_HOSTNAME}:3005`,
  API_ROOT: url.resolve(`http://${process.env.DEV_HOSTNAME}:3005`, `/api/`)
};

export default config;
