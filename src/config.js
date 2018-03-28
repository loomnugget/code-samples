import url from 'url';

const config = {
  API_VERSION: 'v1',
  API_SERVER: `http://${process.env.DEV_HOSTNAME}:3005`
};

if (process.env.NODE_ENV == 'production') {
  config.API_SERVER = process.env.API_SERVER;
}
else if(process.env.NODE_ENV == 'development'){
  config.API_SERVER = `http://${process.env.DEV_HOSTNAME}:3005`;
}

config.API_ROOT = url.resolve(config.API_SERVER, `/api/${config.API_VERSION}/`);

export default config;
