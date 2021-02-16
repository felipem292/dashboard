import React from "react";
import { NavItem } from "../components";
import { Link } from "react-router-dom";
import { t } from "../_utils/texts/commons";

const GoBack = (props) => (
  <NavItem className="h4 d-none d-md-block">
    <span className="navbar-text">
      <Link to="/admin/instruments">
        <i className="fa fa-home"></i>
      </Link>
    </span>
    <span className="navbar-text px-2">
      <i className="fa fa-angle-right"></i>
    </span>
    {props.selectedView === "list" && <span className="navbar-text"></span>}
    {props.selectedView === "details" && (
      <span className="navbar-text">
        <Link onClick={props.onClick}>{t.GO_BACK}</Link>
      </span>
    )}
  </NavItem>
);

export { GoBack };
