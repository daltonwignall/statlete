import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const NavItem = ({ title, imagePath }) => (
  <li className="nav__item">
    <img className="nav__item__image" src="https://i.dailymail.co.uk/i/pix/2015/04/26/00/2800DADF00000578-3055692-image-a-20_1430006228344.jpg" alt={title} />
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