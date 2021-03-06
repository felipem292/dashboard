import React, { useEffect, useState } from "react";
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

export const SimulationForm = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    lastName: "",
    email: "",
    rut: "",
    phone: "",

    pie: "",
    interestRate: "",
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

    pie,
    interestRate,
    selectTime,
    sellPrice,
    cashValue,
    subsidy,
  } = formValues;
  // sellPrice
  // [pie]
  // [cashValue]
  // [subsidy]
  // useEffect(() => {
  //   setCreditPercentage((creditAmount / sellPrice) * 100);
  // }, [sellPrice, TotalCredito]);
  useEffect(() => {
    // setCreditPercentage((creditAmount / sellPrice) * 100);
    setTime(selectTime);
    setTotalCredito(sellPrice - subsidy - cashValue - pie);
  }, [sellPrice, subsidy, cashValue, pie]);
  const [tasa, setTasa] = useState(4.63);
  const [creditPercentage, setCreditPercentage] = useState(0);
  const [TotalCredito, setTotalCredito] = useState(0);
  const [uFValue, setUFValue] = useState(29.353, 12);
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
      antiguedad: 0,
      objetivo: "prueba",
      ufCotizada: parseInt(uFValue, 10),
      tasa: tasa,
      valorVenta: parseInt(sellPrice, 10),
      pie: pie,
      montoContado: parseInt(cashValue, 10),
      montoSubsidio: parseInt(subsidy, 10),
      plazo: parseInt(selectTime, 10),
    };
    console.log(simulatedData);
  };

  return (
    <>
      <h2>Valor UF: ${uFValue}</h2>
      <Form onSubmit={handleSubmit}>
        <Col md={12}>
          <Row>
            <h3>Cliente</h3>
          </Row>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label for="name">Nombres</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Tu nombre"
                  autoComplete="off"
                  value={name}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md={5}>
              <FormGroup>
                <Label for="rut">Rut</Label>
                <Input
                  type="text"
                  name="rut"
                  id="rut"
                  autoComplete="off"
                  value={rut}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label for="name">Apellidos</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Tu nombre"
                  autoComplete="off"
                  value={lastName}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@gmail.com"
                  autoComplete="off"
                  value={email}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
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
                <Label for="exampleSelect">info del inmueble por api</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <h3>Credito</h3>
          </Row>
          <Row>
            <Col md={5}>
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
            <Col md={5}>
              <FormGroup check>
                <Input
                  type="checkbox"
                  name="interestRate"
                  id="interestRate"
                  autoComplete="off"
                  value={interestRate}
                  onChange={handleInputChange}
                />
                <Label for="interestRate" check>
                  Subsidiado
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
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
            <Col md={5}></Col>
          </Row>
          <Row>
            <Col md={5}>
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
            <Col md={5}>
              <FormGroup>
                <h3> total credito {TotalCredito}</h3>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
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
            <Col md={5}>
              <FormGroup>
                <h3> Financiamiento {TotalCredito}</h3>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label for="selectTime">Selecciona el plazo</Label>
                <Input
                  type="select"
                  name="selectTime"
                  id="selectTime"
                  value={selectTime}
                  onChange={handleInputChange}
                >
                  <option>cantidad de años</option>
                  <option>12</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                  <option>30</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <h4>financiamiento {creditPercentage}%</h4>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Button type="submit">Mostrar costos</Button>
      </Form>
      <SimulationCreditTable
        selectTime={selectTime}
        TotalCredito={TotalCredito}
        uFValue={uFValue}
      />
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
