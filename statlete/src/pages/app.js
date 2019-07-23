import React from "react";
import Routes from "./routes";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "../components";
import { selectAthlete } from "../state/actions/athletes.action";
import { selectTeam } from "../state/actions/teams.action";
import "./styles/app.scss";

const App = ({ athletes, selectedAthleteID, selectAthlete, selectTeam }) => {
  const getAthletesMenuData = () => {
    const hasAthletes = Object.keys(athletes).length;

    if (hasAthletes) {
      return Object.keys(athletes).map((athleteID) => {
        const athlete = athletes[athleteID];

        return {
          title: athlete.name,
          imagePath: athlete.image && athlete.image.contentUrl,
          selected: athleteID === selectedAthleteID,
          onClick: onSelectAthlete,
          athleteID,
          teamID: athlete.team && athlete.team.id
        };
      });
    }
  };

  const onSelectAthlete = (athleteID, teamID) => {
    selectAthlete(athleteID);
    selectTeam(teamID);
  };

  return (
    <div className="app">
      <Router>
        <Nav navItems={getAthletesMenuData()||[]} />
        <Routes />
      </Router>
    </div>
  );
};

const mapStateToProps = ({ athletes }) => {
  const { selectedAthleteID, ...athleteEntities } = athletes;

  return {
    athletes: athleteEntities,
    selectedAthleteID
  };
};

App.propTypes = {
  athletes: PropTypes.object,
  selectedAthleteID: PropTypes.string,
  selectAthlete: PropTypes.func,
  selectTeam: PropTypes.func,
};

export default connect(mapStateToProps, { selectAthlete, selectTeam })(App);
