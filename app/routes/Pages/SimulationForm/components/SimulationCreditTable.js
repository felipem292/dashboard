import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export const SimulationCreditTable = ({
  selectTime = "cantidad de años",
  TotalCredito,
  uFValue,
}) => {
  const tasaFija = 4.63;
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
    setDividendoTotal(totalSeguros + dividendoNeto);
    setCreditTotalCost(dividendoTotal * 4);
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
              <th>Años de plazo</th>
              <th>Tasa fija</th>
              <th>Dividendo Neto</th>
              <th>Seguro incendio y sismo</th>
              <th>Seguro desgr.</th>
              <th>Seguro cesantia</th>
              <th>Dividendo total</th>
              <th>CAE</th>
              <th>Costo total crédito</th>
              <th>Renta minima</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectTime}</td>
              <td>{tasaFija * uFValue}</td>
              <td>{dividendoNeto * uFValue}</td>
              <td>{seguroIncendio * uFValue}</td>
              <td>{seguroDesgra * uFValue}</td>
              <td>{seguroCesantia * uFValue}</td>
              <td>{dividendoTotal * uFValue}</td>
              <td>???????</td>
              <td>{creditTotalCost * uFValue}</td>
              <td>???????</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <h2>seleccciona numero de años</h2>
      )}
    </div>
  );
};
