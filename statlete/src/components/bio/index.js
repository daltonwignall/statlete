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
  weight: PropTypes.string,
  position: PropTypes.string,
  teamName: PropTypes.string,
  imagePath: PropTypes.string,
  wikiLink: PropTypes.string,
  websiteLink: PropTypes.string,
};

Bio.defaultProps = {
  name: "LeBron James",
  description: "LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association. ",
  height: "6' 8\"",
  weight: "250",
  position: "F",
  teamName: "Los Angeles Lakers",
  imagePath: "http://t3.gstatic.com/images?q=tbn:ANd9GcQMzy_Eu9MFMgiSZJIjAgKh44vSquA3BEQka1MHYxnh_NrnW9fA",
  wikiLink: "https://en.wikipedia.org/wiki/LeBron_James",
  websiteLink: "http://www.lebronjames.com",
};

export default Bio;