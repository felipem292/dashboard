import React from "react";
import PropTypes from "prop-types";

const LoaderImage = (props) => (
  <React.Fragment>
    <img
      src={require("../../images/spinner/spinner.svg")}
      width="45"
      height="45"
      id="loader-circle"
    />
    <span >{props.text}</span>
  </React.Fragment>
);

LoaderImage.propTypes = {
  text: PropTypes.string,
};
LoaderImage.defaultProps = {
  text: "",
};

export { LoaderImage };
