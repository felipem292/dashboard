import conf from "./config";
const auth = {
  mandatorySignIn: true,
  region: conf.REGION,
  userPoolId: conf.COGNITO.USER_POOL_ID,
  identityPoolId: conf.COGNITO.IDENTITY_POOL_ID,
  userPoolWebClientId: conf.COGNITO.APP_CLIENT_ID,
};
export default auth;
