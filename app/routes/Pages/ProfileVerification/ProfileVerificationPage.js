import React from "react";
import { Col, Row, Button } from "reactstrap";
import Swal from "sweetalert2";
import { ProfileVerificationCard } from "./components/ProfileVerificationCard";

export const ProfileVerificationPage = () => {
  const handleSubmit = () => {
    Swal.fire("Documentos Enviados", "", "success");
  };
  return (
    <>
      <Col sm={10} md={10} lg={10}>
        <h2>1. Documentación Personal</h2>
        <Row className="mt-3 mb-3 justify-content-center">
          <Col sm={10} md={10} lg={10}>
            <ProfileVerificationCard subtitle="1.1 Documentos De Identidad" />
          </Col>
        </Row>
        <Row className="mt-3 mb-3 justify-content-center">
          <Col sm={10} md={10} lg={10}>
            <ProfileVerificationCard subtitle="1.2 Documentos Legales" />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <ProfileVerificationCard subtitle="" />
          </Col>
        </Row>
        <h2>2. Documentación Laboral</h2>
        <Row className="mt-3 mb-3 justify-content-center">
          <Col sm={10} md={10} lg={10}>
            <ProfileVerificationCard subtitle="2.1 Documentos Legales" />
          </Col>
        </Row>
        <Row className="mt-3 mb-3 justify-content-center">
          <Col sm={10} md={10} lg={10}>
            <ProfileVerificationCard subtitle="2.2 Certificados Bancarios" />
          </Col>
        </Row>
        <Row className="mt-3 mb-3 justify-content-center">
          <Col sm={10} md={10} lg={10}>
            <ProfileVerificationCard subtitle="2.3 Otros Documentos" />
          </Col>
        </Row>
        {/* <h2>3. Requerir Verificacion</h2> */}
        <Col sm={11} md={11} lg={11}>
          <Row className="justify-content-end">
            <Button onClick={handleSubmit}>Enviar Documentacion</Button>
          </Row>
        </Col>
      </Col>
    </>
  );
};
