import React, { useState, useEffect } from "react";

import { SidebarMenu } from "./../../components";
import { Auth } from "aws-amplify";

export const SidebarMiddleNav = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   Auth.currentAuthenticatedUser().then((user) => {
  //     setUser(user);
  //   });
  // }, []);

  return (
    <SidebarMenu>
      <SidebarMenu.Item
        icon={<i className="fa fa-fw fa-home"></i>}
        title="Menú"
      >
        <SidebarMenu.Item title="Enviar" to="/inicio/enviar" exact />
        <SidebarMenu.Item title="Seguimiento" to="/inicio/seguimiento" exact />
      </SidebarMenu.Item>
    </SidebarMenu>
  );
};
