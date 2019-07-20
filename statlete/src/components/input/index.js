import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

const Input = ({ className, ...otherProps }) => {
  const classes = classNames("input", className);

  return (
    <input
      className={classes}
      {...otherProps}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
};

export default Input;