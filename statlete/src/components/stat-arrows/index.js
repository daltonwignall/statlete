import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import "./styles.scss";

const StatArrows = ({ className, currentIndex, statsLength, onClick }) => {
  const classes = classNames("stat-arrows", className);
  const determineNewIndex = (currentIndex, indexChange) => {
    let newIndex = currentIndex + indexChange;

    if (newIndex > statsLength - 1) {
      newIndex = statsLength - 1;
    } else if (newIndex < 0) {
      newIndex = 0;
    }

    return newIndex;
  };

  const handleClick = (indexChange) => {
    if (onClick) {
      const newIndex = determineNewIndex(currentIndex, indexChange);

      onClick(newIndex);
    }
  };

  return (
    <div className={classes}>
      <FaCaretLeft className="stat-arrows__icon" onClick={handleClick.bind(this, -1)} />
        <span  className="stat-arrows__text">Change Stats</span>
      <FaCaretRight className="stat-arrows__icon" onClick={handleClick.bind(this, 1)} />
    </div>
  );
};

StatArrows.propTypes = {
  className: PropTypes.string,
  currentIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  statsLength: PropTypes.number.isRequired,
};

StatArrows.defaultProps = {
  currentIndex: 0,
  statsLength: 0,
};

export default StatArrows;