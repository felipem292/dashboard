import React from "react";
import { Table, Col } from "reactstrap";
// import { Col } from ".";
const SimulatorTable = ({ simulationData, loading }) => {
  return (
    <Col lg={12}>
      <Table striped>
        <thead>
          <tr>
            <th>Antiguedad del inmueble</th>
            <th>Fecha</th>
            <th>Fono Deudor</th>
            <th>Monto contado</th>
            <th>Monto Subsidio</th>
            <th>Nombre</th>
            <th>Objetivo</th>
            <th>Pie</th>
            <th>Plazo</th>
            <th>Rut Deudor</th>
            <th>Tasa</th>
            <th>UF Cotizada</th>
            <th>Valor venta</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <td colspan="12">Cargando datos...</td>
          ) : (
            simulationData.map((data) => (
              // console.log(data.fonoDeudor);
              <tr>
                <td>{data.antiguedad}</td>
                <td>{data.cratedAt}</td>
                <td>{data.fonoDeudor}</td>
                <td>{data.montoContado}</td>
                <td>{data.montoSubsidio}</td>
                <td>{data.nombreDeudor}</td>
                <td>{data.objetivo}</td>
                <td>{data.pie}</td>
                <td>{data.plazo}</td>
                <td>{data.rutDeudor}</td>
                <td>{data.tasa}</td>
                <td>{data.ufCotizada}</td>
                <td>{data.valorVenta}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Col>
  );
};

export default SimulatorTable;
