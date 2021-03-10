import React from "react";
import { Col, Row, Card, Button, CardTitle, CardText } from "reactstrap";
// import { Col, Row } from "reactstrap";
import { PersonalVerificationForm } from "./PersonalVerificationForm";
export const ProfileVerificationCard = ({ subtitle }) => {
  return (
    <Card body>
      <CardTitle>
        <h4 className="mb-3">{subtitle}</h4>
        <Card body>
          <CardText>
            <Row className="justify-content-around">
              <Col sm={3} md={3} lg={3}>
                Nombre Documento
              </Col>
              <Col sm={3} md={3} lg={3}>
                Estado
              </Col>
              <Col sm={3} md={3} lg={3}>
                Acciones
              </Col>
            </Row>
          </CardText>
        </Card>
      </CardTitle>
      {/* <CardText> */}

      <PersonalVerificationForm />
      {/* </CardText> */}
    </Card>
  );
};
