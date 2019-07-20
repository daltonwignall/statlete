import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

const DataContainer = ({ className, children, subTitle, title }) => {
  const classes = classNames("data-container", className);

  return (
    <div className={classes}>
      <h2>{title} - {subTitle}</h2>
      {children}
    </div>
  );
};

DataContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  subTitle: PropTypes.string,
  title: PropTypes.string
};

DataContainer.defaultProps = {
  subTitle: "",
  title: ""
};

export default DataContainer;
