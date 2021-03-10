import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { EmptyCard } from "./components/EmptyCard";
import { LifeCycleCard } from "./components/LifeCycleCard";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

export const Operations = () => {
  const [documentationCheck, setDocumentationCheck] = useState(false);
  return (
    <Col sm={12} md={12} lg={12}>
      <h1 className="ml-1">Solicitud Nº3 - Cesar Villegas</h1>
      <FormText color="muted">
        <h4 className="ml-1 mb-5"> RUT: 1.352.365.524</h4>
      </FormText>
      <Row>
        <Col sm={2} md={2} lg={2}>
          <LifeCycleCard documentationCheck={documentationCheck} />
        </Col>
        <Col sm={10} md={8} lg={8}>
          <EmptyCard>
            <h5 className="mb-4">Documentos De Soporte</h5>
            <Form>
              <FormGroup>
                <Label for="exampleDate">Nombre Del Documento</Label>
                <Input type="text" name="date" id="exampleDate" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Comentario Visado:1</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>

              <FormGroup>
                <Label for="exampleFile">Subir Documento</Label>
                <Input type="file" name="file" id="exampleFile" />
                {/* <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText> */}
              </FormGroup>
            </Form>
          </EmptyCard>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Form>
          <FormGroup check>
            <Input id="InputType-radio" name="radioOption" type="radio" />
            <Label className=" mr-5" check for="InputType-radio">
              Aprobar
            </Label>

            <Input id="Reprobar" name="radioOption" type="radio" />
            <Label className=" " for="Reprobar">
              Reprobar
            </Label>
          </FormGroup>
        </Form>
      </Row>
      <Row className="justify-content-center mt-3">
        <Button onClick={() => setDocumentationCheck(true)}>Guardar</Button>
      </Row>
    </Col>
  );
};
