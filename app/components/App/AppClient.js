import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import { Router } from "react-router-dom";

import { history } from "../../_redux/_helpers";
import { alertActions } from "../../_redux/_actions";

import AppLayout from "./../../layout/default";
import { RoutedContent } from "./../../routes";

import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const basePath = process.env.BASE_PATH || "/";

const AppClient = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <Router history={history}>
      <AppLayout>
        <RoutedContent />
        <ToastContainer></ToastContainer>
      </AppLayout>
    </Router>
  );
};

export default hot(module)(AppClient);
