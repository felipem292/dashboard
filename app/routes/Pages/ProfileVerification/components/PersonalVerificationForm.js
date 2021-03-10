import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
export const PersonalVerificationForm = () => {
  return (
    <div>
      <p>Agrega la informacion y luego carga el archivo</p>
      <Form>
        <FormGroup row>
          <Label for="fileName" sm={2} md={2} lg={2}>
            Nombre Archivo
          </Label>
          <Col sm={10}>
            <Input type="text" name="fileName" id="fileName" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Description" sm={2} md={2} lg={2}>
            Descripción
          </Label>
          <Col sm={10}>
            <Input type="textarea" name="Description" id="Description" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2} md={2} lg={2}></Label>
          <Col sm={10} className="row justify-content-end">
            <Col sm={4}>
              <Input type="file" name="file" id="exampleFile" />
            </Col>
            {/* <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText> */}
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};
