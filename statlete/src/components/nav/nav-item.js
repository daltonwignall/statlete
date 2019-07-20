import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const NavItem = ({ title, imagePath }) => (
  <li className="nav__item">
    <img src={imagePath} alt={title} />
    <span>{title}</span>
  </li>
);

NavItem.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
};

NavItem.defaultProps = {
};

export default NavItem;