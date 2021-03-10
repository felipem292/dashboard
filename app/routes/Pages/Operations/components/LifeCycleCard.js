import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
export const LifeCycleCard = ({ documentationCheck }) => {
  return (
    <Card body>
      <CardTitle tag="h4">Ciclo De Vida</CardTitle>
      <CardText>
        <Row>
          <h6 className="ml-5">
            {" "}
            Documentacion{" "}
            {!!documentationCheck && <i className="fa fa-fw fa-check"></i>}
          </h6>{" "}
        </Row>
        <Row>
          <h6 className="ml-5"> Valuacion Riesgo </h6>{" "}
        </Row>
        <Row>
          <h6 className="ml-5"> Aprobacion Deudor </h6>{" "}
        </Row>
        <Row>
          <h6 className="ml-5"> Tasacion </h6>
        </Row>

        <Row>
          <h6 className="ml-5"> Escrituracion </h6>{" "}
        </Row>
        <Row>
          <h6 className="ml-5"> Credito Activo </h6>{" "}
        </Row>
        <Row>
          <h6 className="ml-5"> Credito Finalizado </h6>
        </Row>
      </CardText>
    </Card>
  );
};
