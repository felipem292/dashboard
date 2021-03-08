import conf from "./config";
import { Auth } from "aws-amplify";
const endpoints = [
  {
    name: "simulationGet",
    endpoint:
      "https://v5tk1ue754.execute-api.us-east-1.amazonaws.com/dev/simulaciones",
    custom_header: async () => {
      return {
        Authorization: `${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      };
    },
    // service: "lambda",
    region: "us-east-1",
  },

  {
    name: "projectsGet",
    endpoint:
      "https://v5tk1ue754.execute-api.us-east-1.amazonaws.com/dev/projects",
    custom_header: async () => {
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
