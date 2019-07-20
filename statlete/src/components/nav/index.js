import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import NavItem from "./nav-item";
import Button from "../button";
import { FaChartLine } from "react-icons/fa";
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
    )
  });

  return (
    <div className={classes}>
      <section>
        <FaChartLine />
        <h1 className="nav__title">Statlete</h1>
      </section>
      <section>
        <Button />
      </section>
      <nav>
        <ul>
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