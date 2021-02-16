import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { NavItem, NavLink, Button } from "./../../components";
import { useDispatch } from "react-redux";
import { userActions } from "../../_redux/_actions";

const NavbarUser = (props) => {
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    dispatch(userActions.logout());
  }
  return (
    <NavItem {...props}>
      <NavLink onClick={handleLogout}>
        <i className="fa fa-power-off"></i>
      </NavLink>
    </NavItem>
  );
};
NavbarUser.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export { NavbarUser };
