import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../../_redux/_actions";

import {
  Form,
  FormGroup,
  FormText,
  Input,
  Button,
  Label,
  EmptyLayout,
  ThemeConsumer,
  Collapse,
} from "./../../../components";

import { HeaderAuth } from "../../../__components/Pages/HeaderAuth";
import { LoaderImage } from "../../../__components/LoaderImage/LoaderImage";
import { FooterAuth } from "../../../__components/Pages/FooterAuth";
import { Auth } from "aws-amplify";
import { history } from "../../../_redux/_helpers";
import { t } from "../../../_utils/texts/login";

function Login() {
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(() => {
      history.push("/dashboards/landing");
    });
  }, []);

  const activeView = useSelector((state) => state.login.activeView);
  const submitted = useSelector((state) => state.login.submitted);
  const user = useSelector((state) => state.login.user);

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch(loginActions.setUser({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginActions.setSubmitted(true));
    if (user.email && user.password) {
      dispatch(loginActions.login(user.email, user.password));
    }
  }

  return (
    <EmptyLayout>
      <EmptyLayout.Section center>
        <HeaderAuth text={t.HEADER_TEXT} />

        <Collapse isOpen={activeView === 1}>
          <Form className="mb-3" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="emailAdress">{t.EMAIL}</Label>
              <Input
                type="email"
                name="email"
                id="emailAdress"
                placeholder={t.EMAIL_LABEL}
                className={
                  "bg-white form-control" +
                  (submitted && !user.email && " is-invalid")
                }
                value={user.email}
                onChange={handleChange}
              />
              {submitted && !user.email && (
                <div className="invalid-feedback">{t.REQUIRED_EMAIL}</div>
              )}
              <FormText color="muted"></FormText>
            </FormGroup>
            <FormGroup>
              <Label for="password">{t.PASSWORD}</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder={t.PASSWORD_LABEL}
                className={
                  "bg-white form-control" +
                  (submitted && !user.password && " is-invalid")
                }
                value={user.password}
                onChange={handleChange}
              />
              {submitted && !user.password && (
                <div className="invalid-feedback">{t.REQUIRED_PASSWORD}</div>
              )}
            </FormGroup>
            <ThemeConsumer>
              {({ color }) => (
                <Button color={color} block>
                  {submitted && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  {t.SIGN_IN_BUTTON}
                </Button>
              )}
            </ThemeConsumer>
          </Form>
        </Collapse>
        <Collapse isOpen={activeView === 2} className="text-center">
          <LoaderImage text={t.LOADING_LOGIN} />
        </Collapse>

        <div className="d-flex mb-4 mt-2">
          <Link
            to="/pages/forgot-password"
            className="ml-auto text-decoration-none"
          >
            {t.FORGOT_LINK}
          </Link>
        </div>
        <FooterAuth />
      </EmptyLayout.Section>
    </EmptyLayout>
  );
}

export default Login;
