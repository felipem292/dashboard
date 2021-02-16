import React, { useEffect } from "react";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  Col,
} from "../../../components";
import { setupPage } from "../../../components/Layout/setupPage";

import { HeaderMain } from "../../../__components/HeaderMain";
import { Auth } from "aws-amplify";
import { history } from "../../../_redux/_helpers";

const Landing = () => {
  useEffect(() => {
    Auth.currentAuthenticatedUser().catch(() => {
      Auth.signOut();
      history.push("/pages/login");
    });
  }, []);
  return (
    <Container>
      <Row className="mb-2">
        <Col lg={12}>
          <HeaderMain title="Administration Landing" className="mb-4 mb-lg-3" />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card className="mb-3">
            <CardBody>
              <CardTitle className="mb-4 d-flex"></CardTitle>
              <div className="d-flex justify-content-center"></div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default setupPage({
  pageTitle: "Landing",
})(Landing);
