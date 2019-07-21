import React from "react";
import PropTypes from "prop-types";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FaChartBar, FaBook, FaChartPie, FaTwitter } from "react-icons/fa";
import { DataContainer } from "../components";
import "./styles/view-athlete.scss";

const ViewAthletePage = ({ playerName }) => {
  return (
    <div className="view-athlete">
      <div className="row">
        <DataContainer
          className="player-stats-container"
          leftHeaderContent={<FaChartBar className="header-icon"/>}
          title={playerName}
          subTitle="Stat"
        >
        </DataContainer>
        <DataContainer
          className="team-stats-container"
          leftHeaderContent={<FaChartPie className="header-icon"/>}
          title="Team Name"
          subTitle="Stat"
        >
        </DataContainer>
      </div>
      <div className="row">
        <DataContainer
          className="about-container"
          leftHeaderContent={<FaBook className="header-icon"/>}
          title={playerName}
          subTitle="Bio"
        >
        </DataContainer>
        <DataContainer
          className="social-container"
          leftHeaderContent={<FaTwitter className="header-icon"/>}
          title={playerName}
          subTitle="Twitter"
        >
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="kingjames"
            autoHeight
          />
        </DataContainer>
      </div>
    </div>
  );
};

ViewAthletePage.defaultProps = {
  playerName: "Player Name"
};

ViewAthletePage.propTypes = {
  playerName: PropTypes.string
};

export default ViewAthletePage;
