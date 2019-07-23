import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FaGlobe, FaWikipediaW } from "react-icons/fa";
import "./styles.scss";

const Bio = ({ className, name, description, height, weight, position, teamName,
  imagePath, wikiLink, websiteLink }) => {
  const classes = classNames("bio", className);

  return (
    <div className={classes}>
      <div>
        <img className="bio__image" src={imagePath} alt={name} />
      </div>
      <div className="bio__info">
        <h2 className="bio__info__name">{name}</h2>
        <hr />
        <p>{description}</p>
        <h4 className="bio__info__position">Position: {position}, {teamName}</h4>
        <h5 className="bio__info__stature">Height: {height}, Weight: {weight}</h5>
      </div>
      <div className="bio__icons">
        <a href={websiteLink}><FaGlobe className="bio__icons__icon"/></a>
        <a href={wikiLink}><FaWikipediaW className="bio__icons__icon"/></a>
      </div>
    </div>
  );
};

Bio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.string,
  weight:  PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.string,
  teamName: PropTypes.string,
  imagePath: PropTypes.string,
  wikiLink: PropTypes.string,
  websiteLink: PropTypes.string,
};

Bio.defaultProps = {
  name: "Player Name",
  description: "This guy is a professional basketball player!",
  height: "???",
  weight: "???",
  position: "???",
  teamName: "???",
  imagePath: "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png",
};

export default Bio;