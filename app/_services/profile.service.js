import { API } from "aws-amplify";

export const profileService = {
  getProfile,
  requestVerification,
};

// TODO: Replace this with the new way to handle profiles. Maybe Just Cognito User Object fetched from cognito
function getProfile(user) {
  const path = "/PK/profile/SK/user_" + user.attributes.sub + "/entity/profile";
  const apiName = "get";
  const params = {
    headers: {},
  };
  return API.get(apiName, path, params).then(
    (profile) => {
      if (profile === null) {
        return { user, profile: null };
      } else {
        return { user, profile };
      }
    },
    (error) => {
      throw error;
    }
  );
}

function requestVerification(userId) {
  const apiName = "request_verification";
  const path = "/request_verification";
  const params = {
    headers: {},
    body: {
      userId,
    },
  };
  return API.post(apiName, path, params).then(
    (response) => {
      return response;
    },
    (error) => {
      throw error;
    }
  );
}
