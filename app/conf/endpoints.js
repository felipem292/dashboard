import conf from "./config";
import { Auth } from "aws-amplify";
const endpoints = [
  {
    // name: "sampleEndpoint",
    // endpoint: conf.API.URL,
    // region: conf.REGION,
    name: "simulationGet",
    endpoint:
      "https://v5tk1ue754.execute-api.us-east-1.amazonaws.com/dev/simulaciones",
    custom_header: async () => {
      // return { Authorization : 'token' }
      // Alternatively, with Cognito User Pools use this:
      // return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
      return {
        Authorization: `${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      };
    },
    // service: "lambda",
    region: "us-east-1",
  },
];
export default endpoints;
