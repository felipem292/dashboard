import React from "react";
import { Route, Switch, Redirect } from "react-router";

// Public Pages
import ForgotPassword from "./Pages/ForgotPassword";
import Login from "./Pages/Login";
import Error404 from "./Pages/Error404";

// All Landing
import Landing from "./Pages/Landing";

// Layout Components
import NavbarOnly from "./Layouts/NavbarOnly";
import SidebarWithNavbar from "./Layouts/SidebarWithNavbar";

import { DefaultNavbar } from "./../layout/components/DefaultNavbar";
import { DefaultSidebar } from "./../layout/components/DefaultSidebar";

import { SidebarANavbar } from "./../layout/components/SidebarANavbar";
import { SidebarASidebar } from "./../layout/components/SidebarASidebar";
import { SignUp } from "./Pages/SignUp/SignUp";
import { TwoFactor } from "./Pages/TwoFactor/TwoFactor";
import { SimulationForm } from "./Pages/SimulationForm/SimulationForm";
import { ProfileVerificationPage } from "./Pages/ProfileVerification/ProfileVerificationPage";
import { Operations } from "./Pages/Operations/Operations";
import { ConsultationScreen } from "./Pages/Consultation/ConsultationScreen";

// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
  return (
    <Switch>
      <Redirect from="/" to="/pages/login" exact />
      {/* <SimulationForm/> */}
      <Route component={ForgotPassword} path="/pages/forgot-password" />
      <Route component={Login} path="/pages/login" />
      <Route
        component={SimulationForm}
        path="/dashboards/formulariosimulacion"
        exact
      />
      <Route
        component={ProfileVerificationPage}
        path="/dashboards/profile-verification"
        exact
      />

      <Route
        component={ConsultationScreen}
        path="/dashboards/consultas"
        exact
      />
      <Route component={Operations} path="/dashboards/operations" exact />
      <Route component={TwoFactor} path="/pages/twofactor" />
      <Route component={SignUp} path="/pages/sigup" />
      <Route component={Landing} path="/dashboards/landing" exact />
      <Route component={Error404} path="/pages/error-404" />
      <Redirect to="/pages/error-404" />
    </Switch>
  );
};

export const RoutedNavbars = () => (
  <Switch>
    <Route component={SidebarANavbar} path="/layouts/sidebar-a" />
    <Route component={NavbarOnly.Navbar} path="/layouts/navbar" />
    <Route
      component={SidebarWithNavbar.Navbar}
      path="/layouts/sidebar-with-navbar"
    />
    <Route component={DefaultNavbar} />
  </Switch>
);

export const RoutedSidebars = () => (
  <Switch>
    <Route component={SidebarASidebar} path="/layouts/sidebar-a" />
    <Route
      component={SidebarWithNavbar.Sidebar}
      path="/layouts/sidebar-with-navbar"
    />
    <Route component={DefaultSidebar} />
  </Switch>
);
