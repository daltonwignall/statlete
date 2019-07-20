import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import NavItem from "./nav-item";
import Button from "../button";
import { FaChartLine, FaPlus } from "react-icons/fa";
import "./styles.scss";

const Nav = ({ className, navItems }) => {
  const classes = classNames("nav", className);
  const navItemElements = navItems.map((navItem, index) => {
    const { title, imagePath } = navItem;

    return (
      <NavItem
        key={`${index}-${title}`}
        title={title}
        imagePath={imagePath}
      />
    );
  });

  return (
    <div className={classes}>
      <header className="nav__title">
        <FaChartLine className="nav__title__icon"/>
        <h1 className="nav__title__text">Statlete</h1>
      </header>
      <section className="nav__add">
        <Button text="Add Athlete" className="nav__add__button" variant="outline">
          <FaPlus className="nav__add__button__icon" />
        </Button>
      </section>
      <nav>
        <ul className="nav__items">
          {navItemElements}
        </ul>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
  navItems: PropTypes.array
};

Nav.defaultProps = {
};

export default Nav;