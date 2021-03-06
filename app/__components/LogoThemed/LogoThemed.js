import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import indap_logo from "../../images/logos/indap_logo.png";
import { ThemeConsumer } from "../../components/Theme";

const logos = {
  white: require("./../../images/logos/logo-primary.svg"),
  primary: require("./../../images/logos/logo-primary.svg"),
  success: require("./../../images/logos/logo-primary.svg"),
  warning: require("./../../images/logos/logo-primary.svg"),
  danger: require("./../../images/logos/logo-primary.svg"),
  info: require("./../../images/logos/logo-primary.svg"),
  indigo: require("./../../images/logos/logo-primary.svg"),
  purple: require("./../../images/logos/logo-primary.svg"),
  pink: require("./../../images/logos/logo-primary.svg"),
  yellow: require("./../../images/logos/logo-primary.svg"),
};

const getLogoUrl = (style, color) => {
  return logos[color];
};

// Check for background
const getLogoUrlBackground = (style, color) => {
  if (style === "color") {
    return logos["white"];
  } else {
    return getLogoUrl(style, color);
  }
};

const LogoThemed = ({ checkBackground, className, ...otherProps }) => (
  <ThemeConsumer>
    {({ style, color }) => (
      <img
        src={
          indap_logo
          // checkBackground
          //   ? getLogoUrlBackground(style, color)
          //   : getLogoUrl(style, color)
        }
        width="200"
        height="58"
        className={classNames("d-block", className)}
        alt="Airframe Logo"
        {...otherProps}
      />
    )}
  </ThemeConsumer>
);
LogoThemed.propTypes = {
  checkBackground: PropTypes.bool,
  className: PropTypes.string,
};

export { LogoThemed };
