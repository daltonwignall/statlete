import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

const Nav = ({ className }) => {
  const classes = classNames("nav", className);

  return (
    <div className={classes}>
      <h1>statlete</h1>
      <nav>
        <ul>
          <li>Ben Simmons</li>
          <li>Anthony Davis</li>
          <li>Draymond Green</li>
          <li>Lebron James</li>
        </ul>
      </nav>
      <aside>
        This is where we collapse the nav at..
      </aside>
    </div>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};

Nav.defaultProps = {
};

export default Nav;