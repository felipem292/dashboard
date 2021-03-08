import React, { useEffect, useState } from "react";

import { API } from "aws-amplify";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";
import { useForm } from "../../../hooks/useForm";
import { SimulationCreditTable } from "./components/SimulationCreditTable";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

export const SimulationForm = () => {
  let history = useHistory();

  const [formValues, handleInputChange] = useForm({
    name: "",
    lastName: "",
    email: "",
    rut: "",
    phone: "",
    projectInfo: "",
    projectObjetive: "",
    antiquity: 0,
    pie: 0,
    // interestRate: "",
    selectTime: "cantidad de años",
    sellPrice: "",
    cashValue: 0,
    subsidy: 0,
  });
  const {
    name,
    lastName,
    email,
    rut,
    phone,
    projectInfo,
    projectObjetive,
    antiquity,
    pie,
    // interestRate,
    selectTime,
    sellPrice,
    cashValue,
    subsidy,
  } = formValues;
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const apiName = "projectsGet";
    const path = "";
    const myInit = {};
    API.get(apiName, path, myInit)
      .then((response) => {
        console.log("respuesta del api", response);

        !!response && setProjectsData(response);
        !!projectsData && setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  useEffect(() => {
    // setCreditPercentage((creditAmount / sellPrice) * 100);
    setTime(selectTime);
    setTotalCredito(sellPrice - subsidy - cashValue - pie);
  }, [sellPrice, subsidy, cashValue, pie]);
  const [tasa, setTasa] = useState(0.0455);
  const [creditPercentage, setCreditPercentage] = useState(0);
  const [TotalCredito, setTotalCredito] = useState(0);
  const [uFValue, setUFValue] = useState(29063.76);
  const [time, setTime] = useState("");
  const handleValueChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const simulatedData = {
      nombreDeudor: name,
      apellidosDeudor: lastName,
      rutDeudor: rut,
      fonoDeudor: phone,
      email: email,
      infoProyecto: projectInfo,
      antiguedad: antiquity.toString(),
      objetivo: projectObjetive,
      ufCotizada: uFValue.toString(),
      tasa: tasa.toString(),
      valorVenta: sellPrice,
      pie: pie,
      montoContado: cashValue,
      montoSubsidio: subsidy,
      plazo: selectTime,
    };
    // console.log(formValues);
    const apiName = "simulationGet";
    const path = "";
    console.log(simulatedData);
    const myInit = {
      body: simulatedData, // replace this with attributes you need
      headers: {}, // OPTIONAL
    };

    API.post(apiName, path, myInit)
      .then(() => {
        Swal.fire("Informacion guardada", "", "success");
        history.go(0);
      })
      .catch((error) => {
        Swal.fire("Hubo un error", { error }, "error");
      });
  };

  return (
    <>
      <h2>Valor UF: ${uFValue}</h2>
      <Form id="SimulatedForm" onSubmit={handleSubmit}>
        <Col md={12}>
          <Row>
            <h3>Cliente</h3>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Nombres</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombres"
                  autoComplete="off"
                  value={name}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="rut">Rut</Label>
                <Input
                  type="text"
                  name="rut"
                  id="rut"
                  placeholder="1.123.456"
                  autoComplete="off"
                  value={rut}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Apellidos</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Apellidos"
                  autoComplete="off"
                  value={lastName}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@mail.com"
                  autoComplete="off"
                  value={email}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="+56319542652"
                  value={phone}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <h3>Inmueble</h3>
          </Row>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label for="projectInfo">Inmubele</Label>
                <Input
                  type="select"
                  name="projectInfo"
                  id="projectInfo"
                  value={projectInfo}
                  onChange={handleInputChange}
                >
                  <option>Seleccione un proyecto</option>
                  {projectsData.map((project, index) => (
                    <option key={index} value={project.id}>
                      {project.proyecto}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="projectObjetive">Objetivo</Label>
                <Input
                  type="select"
                  name="projectObjetive"
                  id="projectObjetive"
                  value={projectObjetive}
                  onChange={handleInputChange}
                >
                  <option>Selecciona una opcion</option>
                  <option>Compra de vivienda-nueva</option>
                  <option>Compra de vivienda-usada</option>
                  <option>Refinanciamiento</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              {projectObjetive !== "Compra de vivienda-nueva" && (
                <FormGroup>
                  <Label for="antiquity">Antiguedad</Label>
                  <Input
                    type="number"
                    name="antiquity"
                    id="antiquity"
                    autoComplete="off"
                    value={antiquity}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              )}
            </Col>
          </Row>

          <Row>
            <h3>Credito</h3>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="sellPrice">Valor de venta</Label>
                <Input
                  type="number"
                  name="sellPrice"
                  id="sellPrice"
                  autoComplete="off"
                  value={sellPrice}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="pie">Pie</Label>
                <Input
                  type="number"
                  name="pie"
                  id="pie"
                  autoComplete="off"
                  value={pie}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="cashValue">Monto contado</Label>
                <Input
                  type="number"
                  name="cashValue"
                  id="cashValue"
                  autoComplete="off"
                  value={cashValue}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="subsidy">Subsidio</Label>
                <Input
                  type="text"
                  name="subsidy"
                  id="subsidy"
                  autoComplete="off"
                  value={subsidy}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            {/* <Col md={3}>
              <FormGroup>
                <Label for="interestRate" check>
                  Subsidiado?
                </Label>
                <Input
                  type="select"
                  name="interestRate"
                  id="interestRate"
                  autoComplete="off"
                  value={interestRate}
                  onChange={handleInputChange}
                >
                  <option>Seleccione una opcion</option>
                  <option>Si</option>
                  <option>No</option>
                </Input>
              </FormGroup>
            </Col> */}
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="selectTime">Selecciona el plazo</Label>
                <Input
                  type="select"
                  name="selectTime"
                  id="selectTime"
                  value={selectTime}
                  onChange={handleInputChange}
                >
                  <option>Cantidad de años</option>
                  <option>12</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                  <option>30</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <h3 className="mt-4">
                {" "}
                {TotalCredito > 0 &&
                  ` Total credito : ${TotalCredito} (${(
                    TotalCredito / uFValue
                  ).toFixed(2)} UF)`}
              </h3>
            </Col>
            <Col md={3}>
              <h3 className="mt-4">
                {" "}
                {TotalCredito > 0 &&
                  `Financiamiento: ${(TotalCredito / sellPrice) * 100} %`}
              </h3>
            </Col>
          </Row>
        </Col>
        <Col md={12}>
          <SimulationCreditTable
            selectTime={selectTime}
            TotalCredito={TotalCredito}
            uFValue={uFValue}
          />
        </Col>
        <Button type="submit">Enviar datos</Button>
      </Form>
    </>
  );
};
{
  /* <Row>
<Col md={5}>
</Col>
<Col md={5}>
</Col>
</Row> */
}
