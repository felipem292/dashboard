import React from "react";
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
export const TwoFactor = () => {
  return (
    <EmptyLayout>
      <EmptyLayout.Section center>
        <HeaderAuth text={t.HEADER_TEXT} />

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

        <FooterAuth />
      </EmptyLayout.Section>
    </EmptyLayout>
  );
};
