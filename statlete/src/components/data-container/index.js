import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

const DataContainer = ({ className, children, subTitle, title, leftHeaderContent, rightHeaderContent }) => {
  const classes = classNames("data-container", className);

  return (
    <div className={classes}>
      <div className="data-container__header">
        {leftHeaderContent}
          <h3 className="data-container__header__title">{title} - {subTitle}</h3>
        {rightHeaderContent}
      </div>
      <div className="data-container__body">
        {children}
      </div>
    </div>
  );
};

DataContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  leftHeaderContent: PropTypes.element,
  rightHeaderContent: PropTypes.element,
  subTitle: PropTypes.string,
  title: PropTypes.string
};

DataContainer.defaultProps = {
  subTitle: "",
  title: ""
};

export default DataContainer;
