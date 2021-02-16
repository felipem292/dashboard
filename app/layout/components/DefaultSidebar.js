import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Sidebar, SidebarTrigger } from "./../../components";

import { SidebarMiddleNav } from "./SidebarMiddleNav";

import { SidebarBottomA } from "../../__components/Sidebar/SidebarBottomA";
import { LogoThemed } from "../../__components/LogoThemed/LogoThemed";
import { ProfileDetailNav } from "../../__components/Profile/ProfileDetailNav";
import { Auth } from "aws-amplify";
import { profileService } from "../../_services";

export const DefaultSidebar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      profileService.getProfile(user).then((u) => {
        setUser(u);
      });
    });
  }, []);

  return (
    <Sidebar>
      {/* START SIDEBAR-OVERLAY: Close (x) */}
      <Sidebar.Close>
        <SidebarTrigger tag={"a"} href="#">
          <i className="fa fa-times-circle fa-fw"></i>
        </SidebarTrigger>
      </Sidebar.Close>
      {/* START SIDEBAR-OVERLAY: Close (x) */}

      {/* START SIDEBAR: Only for Desktop */}
      <Sidebar.HideSlim>
        <Sidebar.Section>
          <Link to="/" className="sidebar__brand">
            <LogoThemed checkBackground />
          </Link>
        </Sidebar.Section>
      </Sidebar.HideSlim>
      {/* END SIDEBAR: Only for Desktop */}

      {/* START SIDEBAR: Only for Mobile */}
      <Sidebar.HideSlim>
        <Sidebar.Section>
          {user != null && (
            <ProfileDetailNav user={user.user} profile={user.profile} />
          )}
        </Sidebar.Section>
      </Sidebar.HideSlim>

      <Sidebar.MobileFluid>
        <Sidebar.Section fluid cover>
          {/* SIDEBAR: Menu */}
          <SidebarMiddleNav />
        </Sidebar.Section>

        <SidebarBottomA />
      </Sidebar.MobileFluid>
      {/* END SIDEBAR: Only for Mobile */}
    </Sidebar>
  );
};
