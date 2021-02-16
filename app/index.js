import "@babel/polyfill";
import Amplify from "aws-amplify";
import endpoints from "./conf/endpoints";
import auth from "./conf/auth";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./_redux/_helpers";
import App from "./components/App";

Amplify.configure({
  Auth: auth,
  API: {
    endpoints,
  },
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
