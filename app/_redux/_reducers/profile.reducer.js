import { profileConstants } from "../_constants";

const initialState = { user: null };

export function profile(state = initialState, action) {
  switch (action.type) {
    case profileConstants.PROFILE_REQUEST_PROFILE:
      return state;
    case profileConstants.PROFILE_REQUEST_SUCCESS:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
