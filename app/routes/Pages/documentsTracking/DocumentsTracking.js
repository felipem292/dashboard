import React from "react";
import { Col, Row, Table } from "reactstrap";
import PdfIcon from "../../../images/icons/pdf.svg";

export const DocumentsTracking = () => {
  return (
    <Col sm={12} md={12} lg={12}>
      <h2 className="text-left mb-5 mt-5">Seguimiento de documentos</h2>
      <div>
        <Table>
          <thead className="form-control-sm">
            <tr>
              <th>N° Solicitud</th>
              <th>RUT Deudor</th>
              <th>Tipo Documento</th>
              <th>Fecha Inicio</th>
              <th>Fecha Término</th>
              <th>Días Transcurridos</th>
              <th>Notaría</th>
              <th>CBR</th>
              <th>Etapa</th>
              <th>Status Actual</th>
              <th>Documento Actual</th>
              <th>Documento Notaría</th>
              <th>Documento CBR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1651</th>
              <td>16.959.45-8</td>
              <td>Pagaré</td>
              <td>02/08/2021</td>
              <td>02/09/2021</td>
              <td>3 dias</td>
              <td>Notaría 2</td>
              <td>n/a</td>
              <td>En notaría por firmar</td>
              <td className="align-middle">
                <Row className="justify-content-center ">
                  <i
                    className="fa fa-circle fa-large"
                    style={{ color: "red" }}
                  ></i>
                </Row>
              </td>
              <th>
                <Row className="justify-content-center ">
                  <img
                    src={PdfIcon}
                    style={{ margin: "auto", width: "50%" }}
                    className="card-img"
                    alt="file"
                  />
                </Row>
              </th>
              <th>
                <Row className="justify-content-center ">
                  <img
                    src={PdfIcon}
                    style={{ margin: "auto", width: "50%" }}
                    className="card-img"
                    alt="file"
                  />
                </Row>
              </th>
              <th className="align-middle">
                <Row className="justify-content-center ">
                  <i
                    className="fa fa-times fa-large"
                    style={{ color: "red" }}
                  ></i>
                </Row>
              </th>
            </tr>

            <tr>
              <th scope="row">2414</th>
              <td>13.959.45-8</td>
              <td>Mutuo</td>
              <td>02/08/2021</td>
              <td>02/09/2021</td>
              <td>7 dias</td>
              <td>Notaría 2</td>
              <td>XYZ</td>
              <td>En notaría por firmar</td>
              <td className="align-middle">
                <Row className="justify-content-center ">
                  <i
                    className="fa fa-circle fa-large"
                    style={{ color: "green" }}
                  ></i>
                </Row>
              </td>
              <th>
                <Row className="justify-content-center ">
                  <img
                    src={PdfIcon}
                    style={{ margin: "auto", width: "50%" }}
                    className="card-img"
                    alt="file"
                  />
                </Row>
              </th>
              <th>
                <Row className="justify-content-center ">
                  <img
                    src={PdfIcon}
                    style={{ margin: "auto", width: "50%" }}
                    className="card-img"
                    alt="file"
                  />
                </Row>
              </th>
              <th>
                <Row className="justify-content-center ">
                  <img
                    src={PdfIcon}
                    style={{ margin: "auto", width: "57%" }}
                    className="card-img"
                    alt="file"
                  />
                </Row>
              </th>
            </tr>
            <tr>
              <th scope="row">1235</th>
              <td>23.959.35-5</td>
              <td>Mutuo</td>
              <td>02/08/2021</td>
              <td>02/09/2021</td>
              <td>5 dias</td>
              <td>DSA</td>
              <td>Buin</td>
              <td>En notaría por firmar</td>
              <td className="align-middle">
                <Row className="justify-content-center ">
                  <i
                    className="fa fa-circle fa-large"
                    style={{ color: "yellow" }}
                  ></i>
                </Row>
              </td>
              <th>
                <Row className="justify-content-center ">
                  <img
                    src={PdfIcon}
                    style={{ margin: "auto", width: "50%" }}
                    className="card-img"
                    alt="file"
                  />
                </Row>
              </th>
              <th className="align-middle">
                {" "}
                <Row className="justify-content-center ">
                  <i
                    className="fa fa-times fa-large"
                    style={{ color: "red" }}
                  ></i>
                </Row>
              </th>
              <th className="align-middle">
                <Row className="justify-content-center ">
                  <i
                    className="fa fa-times fa-large"
                    style={{ color: "red" }}
                  ></i>
                </Row>
              </th>
            </tr>
          </tbody>
        </Table>
      </div>
    </Col>
  );
};
