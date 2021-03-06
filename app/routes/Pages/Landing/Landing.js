import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  Col,
} from "../../../components";
import { setupPage } from "../../../components/Layout/setupPage";
import { useSelector } from "react-redux";
import { HeaderMain } from "../../../__components/HeaderMain";

import { API, Auth } from "aws-amplify";
import { history } from "../../../_redux/_helpers";
import endpoints from "../../../conf/endpoints";
import SimulatorTable from "../../../components/SimulatorTable/SimulatorTable";

const Landing = () => {
  const [simulationData, setSimulationData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) =>
        console.log("autenticado", user.signInUserSession.idToken)
      )
      .catch((err) => {
        Auth.signOut();
        history.push("/pages/login");
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const apiName = "simulationGet";
    const path = "";
    const myInit = {
      // OPTIONAL
    };

    API.get(apiName, path, myInit)
      .then((response) => {
        console.log("respuesta del api", response);

        !!response && setSimulationData(response);
        !!simulationData && setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <Container>
      <Row className="mb-2">
        <Col lg={12}>
          <HeaderMain title="Tabla de simulaciones" className="mb-4 mb-lg-3" />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card className="mb-3">
            <CardBody>
              <CardTitle className="mb-4 d-flex"></CardTitle>
              <div className="d-flex justify-content-center">
                <SimulatorTable
                  loading={loading}
                  simulationData={simulationData}
                />
              </div>
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
