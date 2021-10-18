import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { NavItem, NavLink, Button } from "./../../components";
import { useDispatch } from "react-redux";
import { userActions } from "../../_redux/_actions";
import { ContentConfirm } from "../../components/ContentConfirm";
import { t } from "../../_utils/texts/forgot";

const NavbarUser = (props) => {
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    toast(
      ContentConfirm({
        titleAction: "Confirmar cierre de sesión",
        text: "Esto cerrará la sesión, el trabajo no guardado se puede perder",
        accept: () => {
          dispatch(userActions.logout());
        },
      })
    );
  }
  return (
    <NavItem {...props}>
      <NavLink onClick={handleLogout}>
        <i style={{ cursor: "pointer" }} className="fa fa-power-off"></i>
      </NavLink>
    </NavItem>
  );
};
NavbarUser.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export { NavbarUser };
