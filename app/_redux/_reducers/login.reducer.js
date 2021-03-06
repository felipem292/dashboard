import { loginConstants } from "../_constants";

const initialState = {
  activeView: 1,
  submitted: false,
  user: {
    email: "felipem292@hotmail.com",
    // password: "Asd.1234567890",
    // email: "cvillegas@quantum-x.io",
    password: "Asd.12345678901",
  },
};

export function login(state = initialState, action) {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return { ...state, activeView: 2, submitted: true };
    case loginConstants.LOGIN_SUCCESS:
      return { ...state, activeView: 2, submitted: false };
    case loginConstants.LOGIN_FAILURE:
      return { ...state, activeView: 1, submitted: false };
    case loginConstants.LOGIN_RESET:
      return { ...initialState };
    case loginConstants.LOGIN_UPDATE_USER:
      return { ...state, user: action.user };
    case loginConstants.LOGIN_SUBMITTED:
      return { ...state, submitted: action.submitted };
    default:
      return state;
  }
}
