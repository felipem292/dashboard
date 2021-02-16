import { Auth } from "aws-amplify";

import { forgotConstants } from "../_constants";
import { forgotServices } from "../../_services";
import { alertActions } from "./alert.actions";
import { history } from "../_helpers";

export const forgotActions = {
  forgot,
  forgotConfirm,
  setUserForgot,
  setSubmitted,
  setPasswordTooltip,
};

function setPasswordTooltip(passwordTooltip) {
  return (dispatch) => {
    dispatch({
      type: forgotConstants.FORGOT_UPDATE_PW_TOOLTIP,
      passwordTooltip: !passwordTooltip,
    });
  };
}
function setUserForgot(user) {
  return (dispatch) => {
    dispatch({ type: forgotConstants.FORGOT_UPDATE_USER, user });
  };
}

function forgot(user) {
  return (dispatch) => {
    dispatch(request());
    forgotServices.forgot(user).then(
      () => {
        dispatch(success());
        dispatch(alertActions.success("Registration successfull"));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message));
      }
    );
  };

  function request() {
    return { type: forgotConstants.SET_ACTIVE_VIEW, activeView: 2 };
  }
  function success() {
    return { type: forgotConstants.SET_ACTIVE_VIEW, activeView: 3 };
  }
  function failure() {
    return { type: forgotConstants.SET_ACTIVE_VIEW, activeView: 1 };
  }
}

function forgotConfirm(user) {
  return (dispatch) => {
    dispatch(request());
    forgotServices.forgotConfirm(user).then(
      () => {
        dispatch(success());
        alertActions.success(
          "Account confirmed successfully, redirecting to login"
        );
        Auth.signOut();
        setTimeout(() => {
          dispatch(reset());
          history.push("/pages/login");
        }, 2500);
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message));
      }
    );
  };
  function reset() {
    return { type: forgotConstants.FORGOT_CODE_RESET };
  }
  function request() {
    return { type: forgotConstants.SET_ACTIVE_VIEW, activeView: 3 };
  }
  function success() {
    return { type: forgotConstants.SET_ACTIVE_VIEW, activeView: 2 };
  }
  function failure(error) {
    return { type: forgotConstants.SET_ACTIVE_VIEW, activeView: 3 };
  }
}

function setSubmitted(submitted) {
  return (dispatch) => {
    dispatch({ type: forgotConstants.FORGOT_SUBMITTED, submitted });
  };
}
