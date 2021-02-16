import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import PropTypes from "prop-types";

import {
  UncontrolledDropdown,
  DropdownToggle,
  IconWithBadge,
  Badge,
  ExtendedDropdown,
  ListGroup,
  ListGroupItem,
  Media,
} from "./../../components";

/*eslint-disable */
const activityFeedIcons = [
  <span className="fa-stack fa-lg fa-fw d-flex mr-3">
    <i className="fa fa-circle fa-fw fa-stack-2x text-success"></i>
    <i className="fa fa-check fa-stack-1x fa-fw text-white"></i>
  </span>,
  <span className="fa-stack fa-lg fa-fw d-flex mr-3">
    <i className="fa fa-circle fa-fw fa-stack-2x text-danger"></i>
    <i className="fa fa-close fa-stack-1x fa-fw text-white"></i>
  </span>,
  <span className="fa-stack fa-lg fa-fw d-flex mr-3">
    <i className="fa fa-circle fa-fw fa-stack-2x text-warning"></i>
    <i className="fa fa-exclamation fa-stack-1x fa-fw text-white"></i>
  </span>,
  <span className="fa-stack fa-lg fa-fw d-flex mr-3">
    <i className="fa fa-circle fa-fw fa-stack-2x text-primary"></i>
    <i className="fa fa-info fa-stack-1x fa-fw text-white"></i>
  </span>,
];
/*eslint-enable */

const NavbarActivityFeed = (props) => (
  <UncontrolledDropdown nav inNavbar {...props}>
    <DropdownToggle nav>
      <IconWithBadge
        badge={
          <Badge pill color="primary">
            0
          </Badge>
        }
      >
        <i className="fa fa-bell-o fa-fw" />
      </IconWithBadge>
    </DropdownToggle>
    <ExtendedDropdown right>
      <ExtendedDropdown.Section className="d-flex justify-content-between align-items-center">
        <h6 className="mb-0">Activity Feed</h6>
        <Badge pill>0</Badge>
      </ExtendedDropdown.Section>
      <ExtendedDropdown.Section className="text-center" to="/apps/widgets">
        See All Notifications
        <i className="fa fa-angle-right fa-fw ml-2" />
      </ExtendedDropdown.Section>
    </ExtendedDropdown>
  </UncontrolledDropdown>
);
NavbarActivityFeed.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export { NavbarActivityFeed };
