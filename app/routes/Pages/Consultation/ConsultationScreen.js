import React, { useState } from "react";
import { EmptyCard } from "../Operations/components/EmptyCard";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useForm } from "../../../hooks/useForm";
export const ConsultationScreen = () => {
  const initialForm = {
    rutNumber: "",
  };
  const [formValues, handleInputChange] = useForm(initialForm);
  const [showData, setShowData] = useState(false);
  const { rutNumber } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rutNumber);
    rutNumber === "9774212" && setShowData(true);
  };
  return (
    <div>
      {showData === false && (
        <EmptyCard>
          <Col sm={12} md={12} lg={12}>
            <Form onSubmit={handleSubmit}>
              <Row className="justify-content-center">
                <Col sm={6} md={6} lg={6} className="align-self-center">
                  <FormGroup>
                    <Label for="exampleEmail">Rut</Label>
                    <Input
                      type="number"
                      name="rutNumber"
                      id="rutNumber"
                      placeholder="1094926156"
                      autoComplete="off"
                      value={rutNumber}
                      onChange={handleInputChange}
                      required={true}
                    />
                  </FormGroup>
                </Col>
                <Col sm={3} md={3} lg={3} className="align-self-center">
                  <Button type="submit" className="mt-3">
                    Buscar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </EmptyCard>
      )}
      {!!showData && (
        <>
          <Row className="align-self-center">
            <h1>Solicitud:</h1>
            <h3 className="ml-3 mt-2">Cesar Andres Villegas Tabares</h3>
          </Row>
          <Row className="align-self-center mb-3">
            <h2>Rut:</h2>
            <h4 className="ml-3 mt-2">9774212</h4>
          </Row>
        </>
      )}
      {!!showData && (
        <Col sm={9} md={9} lg={9} className="align-self-center">
          <EmptyCard>
            <h2>Datos Del Credito</h2>
            <Row className="justify-content-center mt-4">
              <Col sm={3} md={3} lg={3} className="align-self-center">
                <Row>
                  {" "}
                  <h5>Monto Credito</h5>
                </Row>
                <Row>1720 UF</Row>
              </Col>
              <Col sm={3} md={3} lg={3} className="align-self-center">
                <Row>
                  {" "}
                  <h5>Pie</h5>
                </Row>
                <Row>0 UF</Row>
              </Col>
              <Col sm={3} md={3} lg={3} className="align-self-center">
                <Row>
                  {" "}
                  <h5>Subsidio</h5>
                </Row>
                <Row>80 UF</Row>
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Col sm={3} md={3} lg={3} className="align-self-center">
                <Row>
                  {" "}
                  <h5>Tipo Operacion</h5>
                </Row>
                <Row>Compraventa</Row>
              </Col>
              <Col sm={3} md={3} lg={3} className="align-self-center">
                <Row>
                  {" "}
                  <h5>Tipo De Propiedad</h5>
                </Row>
                <Row>Proyecto</Row>
              </Col>
              <Col sm={3} md={3} lg={3} className="align-self-center">
                {" "}
                <Row>
                  <h5> Valor Propiedad</h5>
                </Row>
                <Row>2000 UF</Row>
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Col sm={3} md={3} lg={3} className="align-self-center">
                <Row>
                  {" "}
                  <h5>Antiguedad</h5>
                </Row>
                <Row>Nueva</Row>
              </Col>
              <Col sm={3} md={3} lg={3} className="align-self-center"></Col>
              <Col sm={3} md={3} lg={3} className="align-self-center"></Col>
            </Row>
          </EmptyCard>
        </Col>
      )}
    </div>
  );
};
