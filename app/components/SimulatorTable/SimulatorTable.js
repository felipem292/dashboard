import React from "react";
import { Table, Col } from "reactstrap";
// import { Col } from ".";
const SimulatorTable = ({ simulationData, loading }) => {
  return (
    <Col lg={12}>
      <Table striped>
        <thead>
          <tr>
            <th>Fecha Ingreso</th>
            <th>Nombre Deudor</th>
            <th>Apellido Deudor</th>
            <th>Telefono Deudor</th>
            <th>Rut Deudor</th>
            <th>Objetivo</th>
            <th>Antiguedad Inmueble</th>
            <th>Valor Venta</th>
            <th>Monto Contado</th>
            <th>Monto Subsidio</th>
            <th>Pie</th>
            <th>Plazo</th>
            <th>Tasa</th>
            <th>UF Cotizada</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <td colspan="12">Cargando datos...</td>
          ) : (
            simulationData
              .sort((a, b) => {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.cratedAt) - new Date(a.cratedAt);
              })
              .map((data, index) => (
                // console.log(data.fonoDeudor);
                <tr key={index}>
                  <td>{data.cratedAt}</td>
                  <td>{data.nombreDeudor}</td>
                  <td>{data.apellidosDeudor}</td>
                  <td>{data.fonoDeudor}</td>
                  <td>{data.rutDeudor}</td>
                  <td>{data.objetivo}</td>
                  <td>
                    {data.antiguedad === "0"
                      ? "nuevo"
                      : `${data.antiguedad} años`}
                  </td>
                  <td>{data.valorVenta}</td>
                  <td>{data.montoContado}</td>
                  <td>{data.montoSubsidio}</td>
                  <td>{data.pie}</td>
                  <td>{data.plazo}</td>
                  <td>{data.tasa}</td>
                  <td>{data.ufCotizada}</td>
                </tr>
              ))
          )}
        </tbody>
      </Table>
    </Col>
  );
};

export default SimulatorTable;
