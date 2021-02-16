import { forgotConstants } from "../_constants";

const initialState = {
  activeView: 1,
  passwordTooltip: false,
  user: {
    email: "admin.ch.1@quantum-x.io",
    confirmationCode: "",
    password: "",
  },
  submitted: false,
};

export function forgot(state = initialState, action) {
  switch (action.type) {
    case forgotConstants.FORGOT_UPDATE_PW_TOOLTIP:
      return { ...state, passwordTooltip: action.passwordTooltip };
    case forgotConstants.FORGOT_UPDATE_USER:
      return { ...state, user: action.user };
    case forgotConstants.SET_ACTIVE_VIEW:
      return { ...state, activeView: action.activeView };
    case forgotConstants.FORGOT_CODE_RESET:
      return { ...initialState };
    case forgotConstants.FORGOT_SUBMITTED:
      return { ...state, submitted: action.submitted };
    default:
      return state;
  }
}
