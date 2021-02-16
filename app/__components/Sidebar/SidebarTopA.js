import React from "react";
import faker from "faker/locale/en_US";
import { Link } from "react-router-dom";

import { Sidebar, Avatar, AvatarAddOn } from "../../components";
import { randomAvatar } from "../../utilities";

const avatarImg = randomAvatar();

const SidebarTopA = () => (
  <React.Fragment>
    {/* START: Sidebar Default */}
    <Sidebar.HideSlim>
      <Sidebar.Section className="pt-0">
        <Link to="/" className="d-block">
          <Sidebar.HideSlim></Sidebar.HideSlim>
        </Link>
        <div className="small">{faker.name.findName()}</div>
        <div className="small sidebar__link--muted">
          {faker.name.jobTitle()}
        </div>
      </Sidebar.Section>
    </Sidebar.HideSlim>
    {/* END: Sidebar Default */}

    {/* START: Sidebar Slim */}
    <Sidebar.ShowSlim>
      <Sidebar.Section>
        <Avatar.Image
          size="sm"
          src={avatarImg}
          addOns={[
            <AvatarAddOn.Icon
              className="fa fa-circle"
              color="white"
              key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon
              className="fa fa-circle"
              color="success"
              key="avatar-icon-fg"
            />,
          ]}
        />
      </Sidebar.Section>
    </Sidebar.ShowSlim>
    {/* END: Sidebar Slim */}
  </React.Fragment>
);

export { SidebarTopA };
