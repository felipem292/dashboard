import React, { useState } from "react";
import Swal from "sweetalert2";
import PdfIcon from "../../../images/icons/pdf.svg";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
export const UploadDocument = () => {
  const [documnt, setDocumnt] = useState("");

  const filesChange = (fileList) => {
    if (!fileList.length) {
      return;
    }
    if (fileList.length > 0) {
      setDocumnt(fileList[0].name);
    }
  };
  return (
    <Col sm={12} md={12} lg={12}>
      <h2 className="text-left mb-5 mt-1">Envío de Pagaré o Mutuo a Notaría</h2>
      <Form className="mt-5">
        <Row form>
          <Col sm={3} md={3}>
            <FormGroup>
              <Label for="rut">RUT Agricultor</Label>
              <Input type="rut" name="rut" placeholder="16.919.295-8" />
            </FormGroup>
          </Col>
          <Col sm={3} md={3}>
            <FormGroup>
              <Label for="clientName">Nombre</Label>
              <Input type="clientName" name="clientName" placeholder="Luis" />
            </FormGroup>
          </Col>
          <Col sm={3} md={3}>
            <FormGroup>
              <Label for="lastName">Primer Apellido</Label>
              <Input type="lastName" name="lastName" placeholder="Contreras" />
            </FormGroup>
          </Col>
          <Col sm={3} md={3}>
            <FormGroup>
              <Label for="secondLastName">Segundo Apellido</Label>
              <Input
                type="secondLastName"
                name="secondLastName"
                placeholder="Bustamante"
              />
            </FormGroup>
          </Col>

          <Col sm={3} md={3}>
            <FormGroup>
              <Label for="documentType">Tipo de Documento</Label>
              <Input
                type="select"
                name="documentType"
                // value={generalLabel}
                // onChange={handleInputChange}
              >
                <option hidden>Seleccione una opción</option>
                <option value="pagare">Pagaré</option>
                <option value="mutuo">Mutuo</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm={3} md={3}>
            <FormGroup>
              <Label for="solicitudeNumber">Nº solicitud</Label>
              <Input
                type="solicitudeNumber"
                name="solicitudeNumber"
                placeholder="Luis"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={2} md={2}>
            <FormGroup>
              <Input
                type="file"
                name="document"
                accept=".pdf"
                id="getFile"
                style={{ display: "none" }}
                onChange={(evt) => {
                  filesChange(evt.target.files);
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Col sm={6} md={6}>
          {" "}
          <FormGroup>
            {" "}
            <Row className="justify-content-center">
              <Col sm={6} md={6}>
                <Label for="documentfield">Archivo de Documento</Label>
                <Input name="documentfield" value={documnt} readOnly />
              </Col>
              <Col sm={4} md={4} className="align-self-end">
                <Button
                  onClick={() => document.getElementById("getFile").click()}
                  style={{ backgroundColor: "#17528c" }}
                  className="font-weight-normal w-100"
                >
                  Examinar
                </Button>{" "}
              </Col>
            </Row>{" "}
          </FormGroup>
          <FormGroup>
            {" "}
            <Row className="justify-content-center">
              <Col sm={10} md={10}>
                {documnt && (
                  <span>
                    {" "}
                    <img
                      src={PdfIcon}
                      style={{ margin: "auto", width: "15%" }}
                      className="card-img mb-2"
                      alt="file"
                    />{" "}
                  </span>
                )}
              </Col>
            </Row>{" "}
          </FormGroup>
        </Col>

        <Col sm={2} md={2}>
          {" "}
          <FormGroup>
            {" "}
            <Row>
              <Button
                onClick={() =>
                  Swal.fire("Información guardada con exito", "", "success")
                }
                style={{ backgroundColor: "#17528c" }}
                className="font-weight-normal w-100"
              >
                Guardar
              </Button>{" "}
            </Row>{" "}
          </FormGroup>
        </Col>

        <Col sm={2} md={2}>
          {" "}
          <Row>
            <Button
              className="font-weight-normal w-100"
              onClick={() =>
                Swal.fire("Información enviada a notaría", "", "success")
              }
              style={{ backgroundColor: "#17528c" }}
            >
              Enviar a notaría
            </Button>
          </Row>
        </Col>
      </Form>
    </Col>
  );
};
