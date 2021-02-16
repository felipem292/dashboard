import { loginConstants } from "../_constants";
import { loginService } from "../../_services";
import { alertActions } from "./alert.actions";
import { history } from "../_helpers";

export const loginActions = {
  login,
  setUser,
  setSubmitted,
};

function login(email, password) {
  return (dispatch) => {
    dispatch(request());
    loginService.login(email, password).then(
      (user) => {
        dispatch(success(user));

        history.push("/dashboards/landing");
        dispatch(reset(user));
      },
      (error) => {
        dispatch(failure(error.message));
        dispatch(alertActions.error(error.message));
      }
    );
  };

  function request() {
    return { type: loginConstants.LOGIN_REQUEST };
  }
  function success() {
    return { type: loginConstants.LOGIN_SUCCESS };
  }
  function failure(error) {
    return { type: loginConstants.LOGIN_FAILURE, error };
  }
  function reset() {
    return { type: loginConstants.LOGIN_RESET };
  }
}

function setUser(user) {
  return (dispatch) => {
    dispatch({ type: loginConstants.LOGIN_UPDATE_USER, user });
  };
}

function setSubmitted(submitted) {
  return (dispatch) => {
    dispatch({ type: loginConstants.LOGIN_SUBMITTED, submitted });
  };
}
