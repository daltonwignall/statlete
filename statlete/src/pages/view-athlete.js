import React, { Component } from "react";
import PropTypes from "prop-types";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FaChartBar, FaBook, FaChartPie, FaTwitter } from "react-icons/fa";
import ReactHighcharts from "react-highcharts";
import { DataContainer, StatArrows } from "../components";
import { playTimeScatterConfig, winsLossesPieConfig,
  seasonAveragesBarConfig, gameTimeHistogramConfig } from "../helpers/graphs";
import "./styles/view-athlete.scss";

class ViewAthletePage extends Component {
  constructor(props) {
    super(props);

    this.updatePlayerStatsIndex = this.updatePlayerStatsIndex.bind(this);
    this.updateTeamStatsIndex = this.updateTeamStatsIndex.bind(this);

    this.state = {
      playerStatsIndex: 0,
      teamStatsIndex: 0,
    };
  }
  
  updatePlayerStatsIndex(index) {
    this.setState({ playerStatsIndex: index });
  }

  updateTeamStatsIndex(index) {
    this.setState({ teamStatsIndex: index });
  }

  getPlayerStatsGraph(index) {
    const graphs = [
      <ReactHighcharts config={seasonAveragesBarConfig} />,
      <ReactHighcharts config={playTimeScatterConfig} />
    ];

    return graphs[index];
  }

  getTeamStatsGraph(index) {
    const graphs = [
      <ReactHighcharts config={winsLossesPieConfig} />,
      <ReactHighcharts config={gameTimeHistogramConfig} />
    ];

    return graphs[index];
  }

  render() {
    const { playerName } = this.props;
    const { playerStatsIndex, teamStatsIndex } = this.state;

    return (
      <div className="view-athlete">
        <div className="row">
          <DataContainer
            className="player-stats-container"
            leftHeaderContent={<FaChartBar className="header-icon"/>}
            rightHeaderContent={<StatArrows onClick={this.updatePlayerStatsIndex} statsLength={2} currentIndex={playerStatsIndex}/>}
            title={playerName}
            subTitle="Stat"
          >
            {this.getPlayerStatsGraph(playerStatsIndex)}
          </DataContainer>
          <DataContainer
            className="team-stats-container"
            leftHeaderContent={<FaChartPie className="header-icon"/>}
            rightHeaderContent={<StatArrows onClick={this.updateTeamStatsIndex} statsLength={2} currentIndex={teamStatsIndex}/>}
            title="Team Name"
            subTitle="Stat"
          >
            {this.getTeamStatsGraph(this.state.teamStatsIndex)}
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
            title="NBA"
            subTitle="Twitter"
          >
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="nba"
              autoHeight
            />
          </DataContainer>
        </div>
      </div>
    );
  }
}

ViewAthletePage.defaultProps = {
  playerName: "Player Name"
};

ViewAthletePage.propTypes = {
  playerName: PropTypes.string
};

export default ViewAthletePage;
