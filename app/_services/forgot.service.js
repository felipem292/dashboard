import { Auth } from "aws-amplify";

export const forgotServices = {
  confirm,
  forgot,
  forgotConfirm,
  logout,
};

function confirm(user) {
  const { email, confirmationCode } = user;
  return Auth.confirmSignUp(email, confirmationCode, {
    forceAliasCreation: true,
  })
    .then((user) => {
      return user;
    })
    .catch((error) => {
      throw error;
    });
}

function forgot(user) {
  const username = user.email;
  return Auth.forgotPassword(username)
    .then(async () => {
      await Auth.signOut();
      return user;
    })
    .catch((error) => {
      throw error;
    });
}

function forgotConfirm(user) {
  const { email, confirmationCode, password } = user;
  const username = email;
  return Auth.forgotPasswordSubmit(username, confirmationCode, password)
    .then(async () => {
      await Auth.signOut();
      return user;
    })
    .catch((error) => {
      throw error;
    });
}

function logout() {
  return Auth.signOut();
}
