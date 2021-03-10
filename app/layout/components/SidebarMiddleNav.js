import React, { useState, useEffect } from "react";

import { SidebarMenu } from "./../../components";
import { Auth } from "aws-amplify";

export const SidebarMiddleNav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <SidebarMenu>
      <SidebarMenu.Item
        icon={<i className="fa fa-fw fa-home"></i>}
        title="Simulaciones"
      >
        <SidebarMenu.Item
          title="Formulario simulaciones"
          to="/dashboards/formulariosimulacion"
          exact
        />
        <SidebarMenu.Item
          title="Tabla de simulaciones"
          to="/dashboards/landing"
          exact
        />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<i className="fa fa-fw fa-address-book"></i>}
        title="Dataroom"
      >
        <SidebarMenu.Item
          title="Dataroom"
          to="/dashboards/profile-verification"
          exact
        />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<i className="fa fa-fw fa-address-book"></i>}
        title="Administracion"
      >
        <SidebarMenu.Item
          title="Operaciones"
          to="/dashboards/operations"
          exact
        />
        <SidebarMenu.Item title="Consultas" to="/dashboards/consultas" exact />
      </SidebarMenu.Item>
    </SidebarMenu>
  );
};
