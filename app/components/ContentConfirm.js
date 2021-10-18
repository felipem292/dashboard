import React from "react";
import { Media, Button } from "reactstrap";

export const ContentConfirm = (props) => (
  <div sm={12} md={12} lg={12} className="d-flex">
    <i className="fa fa-fw fa-2x fa-question text-primary mr-2"></i>
    <div>
      <div tag="h6">{props.titleAction}</div>
      <p>{props.text}</p>
      <div className="d-flex mt-2">
        <Button color="primary" onClick={props.accept}>
          Aceptar
        </Button>
        <Button color="link" className="ml-2 text-secondary">
          Cancelar
        </Button>
      </div>
    </div>
  </div>
);
