import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { forgotActions } from "../../../_redux/_actions";
import { useDispatch, useSelector } from "react-redux";

import {
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  EmptyLayout,
  ThemeConsumer,
  Collapse,
  Tooltip,
} from "../../../components";

import { LoaderImage } from "../../../__components/LoaderImage/LoaderImage";
import { HeaderAuth } from "../../../__components/Pages/HeaderAuth";
import { FooterAuth } from "../../../__components/Pages/FooterAuth";
import { Auth } from "aws-amplify";
import { history } from "../../../_redux/_helpers";
import { t } from "../../../_utils/texts/forgot";

function ForgotPassword() {
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(() => {
      history.push("/dashboards/landing");
    });
  }, []);

  const dispatch = useDispatch();

  const submitted = useSelector((state) => state.forgot.submitted);
  const user = useSelector((state) => state.forgot.user);
  const activeView = useSelector((state) => state.forgot.activeView);
  const passwordTooltip = useSelector((state) => state.forgot.passwordTooltip);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(forgotActions.setSubmitted(true));
    if (user.email) {
      dispatch(forgotActions.forgot(user));
    }
  }

  function handleConfirm(e) {
    e.preventDefault();
    dispatch(forgotActions.setSubmitted(true));
    if (user.confirmationCode && user.password && user.email) {
      dispatch(forgotActions.forgotConfirm(user));
    }
  }

  function handleChange(e) {
    let { name, value } = e.target;
    dispatch(forgotActions.setUserForgot({ ...user, [name]: value }));
  }
  function handlePasswordToolip(e) {
    dispatch(forgotActions.setPasswordTooltip(passwordTooltip));
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
                type="text"
                name="email"
                id="email"
                value={user.email}
                placeholder={t.EMAIL_LABEL}
                className={
                  "bg-white form-control" +
                  (submitted && !user.email ? " is-invalid" : "")
                }
                onChange={handleChange}
              />
              {submitted && !user.email && (
                <div className="invalid-feedback">{t.REQUIRED_EMAIL}</div>
              )}
            </FormGroup>
            <div className="d-flex">
              <ThemeConsumer>
                {({ color }) => (
                  <Button color={color} className="align-self-center">
                    {t.RESET_PASSWORD}
                  </Button>
                )}
              </ThemeConsumer>
              <Button
                color="link"
                tag={Link}
                to="/pages/login"
                className="align-self-center ml-auto pr-0 text-decoration-none"
              >
                <i className="fa fa-angle-left mr-2"></i> {t.TO_LOGIN}
              </Button>
            </div>
          </Form>
        </Collapse>
        <Collapse isOpen={activeView === 2} style={{ textAlign: "center" }}>
          <LoaderImage text={t.AUTHENTICATING} />
        </Collapse>
        <Collapse isOpen={activeView === 3}>
          <Form className="mb-3" onSubmit={handleConfirm}>
            <FormGroup>
              <Label for="confirmationCode">{t.CONFIRMATION_CODE}</Label>
              <Input
                type="text"
                name="confirmationCode"
                id="confirmationCode"
                placeholder={t.ENTER_CONFIRMATION}
                value={user.confirmationCode}
                onChange={handleChange}
                className={
                  "bg-white form-control" +
                  (submitted && !user.confirmationCode ? " is-invalid" : "")
                }
              />
              {submitted && !user.confirmationCode && (
                <div className="invalid-feedback">
                  {t.CONFIRMATION_CODE_REQUIRED}
                </div>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="password">{t.PASSWORD}</Label>
              {submitted && !user.confirmationCode && (
                <Tooltip
                  placement="bottom"
                  isOpen={passwordTooltip}
                  target="password"
                >
                  - Minimum 8 characters<br></br>- At least 1 special character.
                  <br></br>- At least 1 lowercase and uppercase.
                </Tooltip>
              )}
              <Input
                type="password"
                name="password"
                id="password"
                placeholder={t.PASSWORD_LABEL}
                value={user.password}
                onChange={handleChange}
                onFocus={handlePasswordToolip}
                onBlur={handlePasswordToolip}
                className={
                  "bg-white form-control" +
                  (submitted && !user.password ? " is-invalid" : "")
                }
              />
              {submitted && !user.password && (
                <div className="invalid-feedback">{t.REQUIRED_PASSWORD}</div>
              )}
            </FormGroup>
            <ThemeConsumer>
              {({ color }) => (
                <Button color={color} block>
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                  {t.UPDATE_PASSWORD}
                </Button>
              )}
            </ThemeConsumer>
          </Form>
        </Collapse>
        <FooterAuth />
      </EmptyLayout.Section>
    </EmptyLayout>
  );
}
export default ForgotPassword;
