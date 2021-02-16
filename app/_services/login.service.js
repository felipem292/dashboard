import { Auth } from "aws-amplify";

export const loginService = {
  login,
};

function login(username, password) {
  return Auth.signIn({ username, password })
    .then((user) => {
      return user;
    })
    .catch((error) => {
      throw error;
    });
}
