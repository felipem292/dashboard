import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { NavItem, NavLink, Button } from "./../../components";
import { useDispatch } from "react-redux";
import { userActions } from "../../_redux/_actions";
import { ContentConfirm } from "../../components/ContentConfirm";

const NavbarUser = (props) => {
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    toast(
      ContentConfirm({
        titleAction: "Confirm Logout",
        text: "This will close the session, unsaved work can be lost",
        accept: () => {
          dispatch(userActions.logout());
        },
        closeToast: () => {},
      }),
      {
        autoClose: false,
        hideProgressBar: true,
      }
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
