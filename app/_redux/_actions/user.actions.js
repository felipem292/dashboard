import { Auth } from "aws-amplify";
import { history } from "../_helpers";
import { alertActions } from "./alert.actions";

export const userActions = { logout };

function logout() {
  return (dispatch) => {
    Auth.signOut().then(() => {
      dispatch(alertActions.info("Redirecting ..."));
      setTimeout(() => {
        history.push("/pages/login");
        dispatch(alertActions.success("Redirected to login."));
      }, 1500);
    });
  };
}
