import { loginConstants } from "../_constants";
import { loginService } from "../../_services";
import { alertActions } from "./alert.actions";
import { history } from "../_helpers";
import { Auth } from "aws-amplify";
import Swal from "sweetalert2";
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
        // localStorage.setItem("userInfo", user);
        console.log("usuario antes de if", user);
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
          const newPassword = "Asd.12345678901";
          console.log("usuario despues de if", user);
          Auth.completeNewPassword(
            user,
            newPassword, // the new password
            // OPTIONAL, the required attributes
            {
              preferred_username: "as1265as56a3s56as",
            }
            // ["andresm292"]
          )
            .then((user) => {
              history.push("/");
              console.log("volver a iniciar sesion");
            })
            .catch((e) => {
              console.log("en el error del completenewpass", e);
            });
        } else {
          // const code = prompt("ingresa el numero de confirmacion");
          Swal.fire({
            title: "Ingresa tu número de confirmación",
            input: "text",
            inputAttributes: {
              autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Enviar",
            showLoaderOnConfirm: true,
            preConfirm: (code) => {
              try {
                // await Auth.setPreferredMFA("felipem292@hotmail.com", "SMS");
                Auth.confirmSignIn(user, code)
                  .then((resp) => {
                    console.log("desde confirmacion del codigo", resp);
                    history.push("/inicio/enviar");
                    dispatch(success(user));
                  })
                  .catch((err) =>
                    console.log("desde confirmacion del codigo", err)
                  );
                // Auth.confirmSignUp("andresmunoz", code);
              } catch (error) {
                console.log("error confirmando codigo", error);
              }
            },
            allowOutsideClick: () => !Swal.isLoading(),
          })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => console.log("esta vuelta se daño"));

          // other situations
        }
        // dispatch(reset(user));
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
