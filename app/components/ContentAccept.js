import React from "react";
import { Media, Button } from "../../components";

export const ContentAccept = (props) => (
  <Media>
    <Media middle left className="mr-3">
      <i className="fa fa-fw fa-2x fa-question text-primary"></i>
    </Media>
    <Media body>
      <Media heading tag="h6">
        {props.titleAction}
      </Media>
      <p>{props.text}</p>
      <div className="d-flex mt-2">
        <Button color="primary" onClick={props.accept}>
          Accept
        </Button>
        <Button color="link" className="ml-2 text-secondary">
          Cancel
        </Button>
      </div>
    </Media>
  </Media>
);
