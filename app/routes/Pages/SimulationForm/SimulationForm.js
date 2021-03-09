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
    pie: "",
    // interestRate: "",
    selectTime: "cantidad de años",
    sellPrice: "",
    cashValue: "",
    subsidy: "",
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
      <Form id="SimulatedForm" onSubmit={handleSubmit}>
        <Col md={12}>
          <Row>
            <Col md={6} className="mb-3 mt-3">
              <h3>Cliente</h3>
            </Col>
            <Col md={4}></Col>
            <Col md={2} className="mb-3 mt-3">
              <h6>Valor UF hoy: ${uFValue}</h6>
            </Col>
          </Row>
          <Row className="row justify-content-around">
            <Col md={3}>
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
                  required={true}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
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
                  required={true}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
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
                  required={true}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="row justify-content-around">
            <Col md={3}>
              <FormGroup>
                <Label for="exampleEmail">Correo Electrónico</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@mail.com"
                  autoComplete="off"
                  value={email}
                  onChange={handleInputChange}
                  required={true}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="phone">Teléfono</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="+56319542652"
                  value={phone}
                  onChange={handleInputChange}
                  required={true}
                />
              </FormGroup>
            </Col>
            <Col md={3}></Col>
          </Row>
          <Row className="row justify-content-around"></Row>
          <Row>
            <Col md={3} className="mb-3 mt-3">
              <h3>Inmueble</h3>
            </Col>
          </Row>
          <Row className="row justify-content-around">
            <Col md={3}>
              <FormGroup>
                <Label for="projectInfo">Inmueble</Label>
                <Input
                  type="select"
                  name="projectInfo"
                  id="projectInfo"
                  value={projectInfo}
                  onChange={handleInputChange}
                  required={true}
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
            <Col md={3}>
              <FormGroup>
                <Label for="projectObjetive">Objetivo</Label>
                <Input
                  type="select"
                  name="projectObjetive"
                  id="projectObjetive"
                  value={projectObjetive}
                  onChange={handleInputChange}
                  required={true}
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
                    required={true}
                  />
                </FormGroup>
              )}
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3 mt-3">
              <h3>Crédito</h3>
            </Col>
          </Row>
          <Row className="row justify-content-around">
            <Col md={2}>
              <FormGroup>
                <Label for="sellPrice">Valor de venta</Label>
                <Input
                  type="number"
                  name="sellPrice"
                  id="sellPrice"
                  autoComplete="off"
                  value={sellPrice}
                  onChange={handleInputChange}
                  required={true}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="pie">Pie</Label>
                <Input
                  type="number"
                  name="pie"
                  id="pie"
                  autoComplete="off"
                  value={pie}
                  onChange={handleInputChange}
                  required={true}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="cashValue">Monto Contado</Label>
                <Input
                  type="number"
                  name="cashValue"
                  id="cashValue"
                  autoComplete="off"
                  value={cashValue}
                  onChange={handleInputChange}
                  required={true}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="subsidy">Subsidio</Label>
                <Input
                  type="text"
                  name="subsidy"
                  id="subsidy"
                  autoComplete="off"
                  value={subsidy}
                  onChange={handleInputChange}
                  required={true}
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
          <Row className="row justify-content-around">
            <Col md={2}>
              <FormGroup>
                <Label for="selectTime">Plazo</Label>
                <Input
                  type="select"
                  name="selectTime"
                  id="selectTime"
                  value={selectTime}
                  onChange={handleInputChange}
                  required={true}
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
            <Col md={2}>
              <h5 className="mt-4">
                {" "}
                {TotalCredito > 0 &&
                  ` Total Credito : ${TotalCredito} (${(
                    TotalCredito / uFValue
                  ).toFixed(2)} UF)`}
              </h5>
            </Col>
            <Col md={2}>
              <h5 className="mt-4">
                {" "}
                {TotalCredito > 0 &&
                  `Financiamiento: ${(TotalCredito / sellPrice) * 100} %`}
              </h5>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Col>
        <Col md={12} className="mt-5">
          <SimulationCreditTable
            selectTime={selectTime}
            TotalCredito={TotalCredito}
            uFValue={uFValue}
          />
        </Col>
        <Col md={3} className="mt-5 ">
          <Button type="submit">Enviar Datos</Button>
        </Col>
      </Form>
    </>
  );
};
