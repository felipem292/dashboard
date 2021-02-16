import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

import {
  UncontrolledDropdown,
  DropdownToggle,
  IconWithBadge,
  Badge,
  ExtendedDropdown,
} from "./../../components";

const messagesColors = ["text-success", "text-danger", "text-warning"];

const NavbarMessages = (props) => (
  <UncontrolledDropdown nav inNavbar {...props}>
    <DropdownToggle nav>
      <IconWithBadge
        badge={
          <Badge pill color="secondary">
            0
          </Badge>
        }
      >
        <i className="fa fa-envelope-o fa-fw" />
      </IconWithBadge>
    </DropdownToggle>
    <ExtendedDropdown right>
      <ExtendedDropdown.Section className="d-flex justify-content-between align-items-center">
        <h6 className="mb-0">Messages</h6>
      </ExtendedDropdown.Section>
    </ExtendedDropdown>
  </UncontrolledDropdown>
);
NavbarMessages.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export { NavbarMessages };
