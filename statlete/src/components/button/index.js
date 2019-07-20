import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

const Button = ({ className, children, text, variant, ...otherProps }) => {
  const classes = classNames("button", `button--${variant}`, className);

  return (
    <button
      className={classes}
      {...otherProps}
    > 
      <React.Fragment>
        <span>{text}</span>
        {children}
      </React.Fragment>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["solid", "outline"])
};

Button.defaultProps = {
  text: "Submit",
  type: "button",
  variant: "solid",
};

export default Button;
