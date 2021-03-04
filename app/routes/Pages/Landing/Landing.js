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
import { useSelector } from "react-redux";
import { HeaderMain } from "../../../__components/HeaderMain";

import { API, Auth } from "aws-amplify";
import { history } from "../../../_redux/_helpers";
import endpoints from "../../../conf/endpoints";

const Landing = () => {
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

  async function postData() {
    const apiName = "MyCustomLambda";
    const path = "";
    const myInit = {
      headers: {
        Authorization: `${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
    };

    return await API.get(apiName, path, myInit);
  }

  useEffect(() => {
    postData()
      .then((response) => {
        // Add your code here
        console.log("respuesta del api", response);
      })
      .catch((error) => {
        console.log("respuesta del api", error.response);
      });
  }, []);

  // const getJsonFromAuthEndpoint = async () => {
  //   // Get the currently logged user
  //   const apiName =
  //     "https://v5tk1ue754.execute-api.us-east-1.amazonaws.com/dev/simulaciones";
  //   const currentUser = await Auth.currentSession();

  //   const response = await fetch(apiName, {
  //     // method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${(await Auth.currentSession())
  //         .getIdToken()
  //         .getJwtToken()}`,
  //     },
  //   });

  //   return response.json();
  // };
  // getJsonFromAuthEndpoint()
  // .then((response) => {
  //   // Add your code here
  //   console.log("respuesta del api", response);
  // })
  // .catch((error) => {
  //   console.log("respuesta del api", error.response);
  // });
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
