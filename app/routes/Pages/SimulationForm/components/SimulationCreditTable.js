import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export const SimulationCreditTable = ({
  selectTime = "cantidad de años",
  TotalCredito,
  uFValue,
}) => {
  const tasaFija = 0.0463;
  const seguroIncendio = 0.3243;
  const seguroDesgra = 1.103;
  const seguroCesantia = 0;
  const totalSeguros = seguroIncendio + seguroDesgra + seguroCesantia;

  const [dividendoNeto, setDividendoNeto] = useState(0);
  const [dividendoTotal, setDividendoTotal] = useState(0);
  const [creditTotalCost, setCreditTotalCost] = useState(0);
  useEffect(() => {
    let anios = parseInt(selectTime, 10);
    console.log(anios);
    setDividendoNeto(TotalCredito / (anios * 12));
    // setDividendoTotal(totalSeguros + dividendoNeto);
    // setCreditTotalCost(dividendoTotal * 4);
  }, [TotalCredito, selectTime]);
  useEffect(() => {
    console.log("hola");
  }, []);
  return (
    <div>
      {selectTime !== "cantidad de años" ? (
        <Table striped>
          <thead>
            <tr>
              <th>Años Plazo</th>
              <th>Tasa Fija</th>
              <th>Dividendo Neto</th>
              <th>Seguro Incendio y Sismo</th>
              <th>Seguro Desgravamen</th>
              <th>Seguro Cesantía</th>
              <th>Dividendo Total</th>
              <th>CAE</th>
              <th>Costo Total Crédito</th>
              <th>Renta Exigida</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectTime}</td>
              <td>{(tasaFija * 100).toFixed(2)} %</td>
              <td>{(dividendoNeto / uFValue).toFixed(4)} UF</td>
              <td>{(seguroIncendio / uFValue).toFixed(2)} UF</td>
              <td>{(seguroDesgra / uFValue).toFixed(2)} UF</td>
              <td>{(seguroCesantia / uFValue).toFixed(2)} UF</td>
              <td>
                {((totalSeguros + dividendoNeto) / uFValue).toFixed(2)} UF
              </td>
              <td>???????</td>
              <td>
                {((totalSeguros + dividendoNeto) / uFValue).toFixed(2)} UF
              </td>
              <td>
                {(((totalSeguros + dividendoNeto) * 4) / uFValue).toFixed(2)} UF
              </td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <h2></h2>
      )}
    </div>
  );
};
