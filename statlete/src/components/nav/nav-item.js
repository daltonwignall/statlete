import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./styles.scss";

const NavItem = ({ title, imagePath, selected, onClick, athleteID, teamID }) => {
  const classes = classNames("nav__item", {
    "nav__item--selected": selected
  });

  const handleClick = () => {
    onClick(athleteID, teamID);
  };

  return (
    <Link to="/view-athlete" className="nav__link" onClick={handleClick}>
      <li className={classes}>
        <img className="nav__item__image" src={imagePath} alt={title} />
        <span className="nav__item__title">{title}</span>
      </li>
    </Link>
  )
};

NavItem.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  athleteID: PropTypes.string,
  teamID: PropTypes.number,
};

export default NavItem;