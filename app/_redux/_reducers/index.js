import { combineReducers } from "redux";

import { login } from "./login.reducer";
import { forgot } from "./forgot.reducer";
import { alert } from "./alert.reducer";
import { profile } from "./profile.reducer";

const rootReducer = combineReducers({
  login,
  forgot,
  alert,
  profile,
});

export default rootReducer;
