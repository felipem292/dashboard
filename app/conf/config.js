import config from "config";

const conf = {
  REGION: `${config.REGION}`,
  API: {
    URL: `${config.API_URL}`,
  },
  COGNITO: {
    USER_POOL_ID: `${config.USER_POOL_ID}`,
    APP_CLIENT_ID: `${config.APP_CLIENT_ID}`,
    IDENTITY_POOL_ID: `${config.IDENTITY_POOL_ID}`,
  },
};
export default {
  ...conf,
};
