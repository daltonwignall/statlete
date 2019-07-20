import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FaCircleNotch } from "react-icons/fa";
import "./styles.scss";

const Spinner = ({ className, spinnerColor, textColor, text }) => {
  const classes = classNames("spinner", className);
  const iconStyles = {
    fill: spinnerColor
  };
  const textStyles = {
    color: textColor
  };

  return(
    <div className={classes}>
      <FaCircleNotch style={iconStyles} />
      <span style={textStyles}>{text}</span>
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
  spinnerColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string
};

Spinner.defaultProps = {
  spinnerColor: "#000",
  textColor:"#000",
  text: "Loading..."
};

export default Spinner;
  