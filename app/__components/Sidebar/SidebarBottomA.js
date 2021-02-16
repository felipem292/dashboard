import React from "react";

import {
  Button,
  Sidebar,
  UncontrolledPopover,
  PopoverBody,
} from "../../components";

import { FooterAuth } from "../Pages/FooterAuth";
import { FooterText } from "../FooterText";

const SidebarBottomA = () => (
  <React.Fragment>
    <Sidebar.HideSlim>
      <Sidebar.Section className="pb-0"></Sidebar.Section>
      <Sidebar.Section>
        <FooterAuth className="text-muted" />
      </Sidebar.Section>
    </Sidebar.HideSlim>

    <Sidebar.ShowSlim>
      <Sidebar.Section className="text-center">
        <Button
          id="UncontrolledSidebarPopoverFooter"
          color="link"
          className="sidebar__link p-0 mt-3"
        >
          <i className="fa fa-fw fa-question-circle-o"></i>
        </Button>
        <UncontrolledPopover
          placement="left-end"
          target="UncontrolledSidebarPopoverFooter"
        >
          <PopoverBody>
            <FooterText />
          </PopoverBody>
        </UncontrolledPopover>
      </Sidebar.Section>
    </Sidebar.ShowSlim>
  </React.Fragment>
);

export { SidebarBottomA };
