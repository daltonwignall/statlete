import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FaChartBar, FaBook, FaChartPie, FaTwitter } from "react-icons/fa";
import ReactHighcharts from "react-highcharts";
import { DataContainer, StatArrows, Bio } from "../components";
import { seasonAveragesBarConfig, fieldGoalScatterConfig,
  scoringPieConfig, winsLossesPieConfig
} from "../helpers/graphs";
import "./styles/view-athlete.scss";

class ViewAthletePage extends Component {
  constructor(props) {
    super(props);

    this.updateAthleteStatsIndex = this.updateAthleteStatsIndex.bind(this);
    this.updateTeamStatsIndex = this.updateTeamStatsIndex.bind(this);

    this.state = {
      athleteStatsIndex: 0,
      teamStatsIndex: 0,
    };
  }
  
  updateAthleteStatsIndex(index) {
    this.setState({ athleteStatsIndex: index });
  }

  updateTeamStatsIndex(index) {
    this.setState({ teamStatsIndex: index });
  }

  getAthleteStatsGraph(index) {
    const graphs = [
      <ReactHighcharts key="season-averages" config={seasonAveragesBarConfig(this.props.seasonStats)} />,
      <ReactHighcharts key="field-goal" config={fieldGoalScatterConfig(this.props.seasonStats, this.props.gameStats)} />
    ];

    return graphs[index];
  }

  getTeamStatsGraph(index) {
    const graphs = [
      <ReactHighcharts key="wins-losses" config={winsLossesPieConfig(this.props.games, this.props.selectedTeamID)} />,
      <ReactHighcharts key="scoring" config={scoringPieConfig(this.props.games, this.props.selectedTeamID)} />
    ];

    return graphs[index];
  }

  getAthleteStatsTitle(index) {
    const titles = ["2018-19 Season Averages", "2018-19 FG %"];

    return titles[index];
  }

  getTeamStatsTitle(index) {
    const titles = ["2018-19 Wins/Losses", "2018-19 PPG"];

    return titles[index];
  }

  render() {
    const { athleteName, description, height, weight, position, teamName,
      imagePath, wikiLink, websiteLink } = this.props;
    const { athleteStatsIndex, teamStatsIndex } = this.state;

    return (
      <div className="view-athlete">
        <div className="row">
          <DataContainer
            className="athlete-stats-container"
            leftHeaderContent={<FaChartBar className="header-icon"/>}
            rightHeaderContent={<StatArrows onClick={this.updateAthleteStatsIndex} statsLength={2} currentIndex={athleteStatsIndex}/>}
            title={athleteName}
            subTitle={this.getAthleteStatsTitle(athleteStatsIndex)}
          >
            {this.getAthleteStatsGraph(athleteStatsIndex)}
          </DataContainer>
          <DataContainer
            className="team-stats-container"
            leftHeaderContent={<FaChartPie className="header-icon"/>}
            rightHeaderContent={<StatArrows onClick={this.updateTeamStatsIndex} statsLength={2} currentIndex={teamStatsIndex}/>}
            title={teamName}
            subTitle={this.getTeamStatsTitle(teamStatsIndex)}
          >
            {this.getTeamStatsGraph(teamStatsIndex)}
          </DataContainer>
        </div>
        <div className="row">
          <DataContainer
            className="about-container"
            leftHeaderContent={<FaBook className="header-icon"/>}
            title={athleteName}
            subTitle="Bio"
          >
            <Bio
              name={athleteName}
              description={description}
              height={height}
              weight={weight}
              position={position}
              teamName={teamName}
              imagePath={imagePath}
              wikiLink={wikiLink}
              websiteLink={websiteLink}
            />
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

const mapStateToProps = ({ athletes, teams }) => {
  const selectedAthleteID = athletes.selectedAthleteID;
  const selectedTeamID = teams.selectedTeamID;
  const athlete = athletes[selectedAthleteID] || {};
  const team = teams[selectedTeamID] || {};

  return {
    selectedAthleteID,
    selectedTeamID,
    athleteName: athlete.name,
    teamName: team.fullName,
    seasonStats: athlete.seasonStats,
    gameStats: athlete.gameStats,
    games: team.games,
    description: athlete.detailedDescription && athlete.detailedDescription.articleBody,
    height: athlete.heightFeet && athlete.heightFeet ? `${athlete.heightFeet}' ${athlete.heightInches}"` : "???",
    weight: athlete.weightPounds,
    position: athlete.position,
    imagePath: athlete.image && athlete.image.contentUrl,
    wikiLink: athlete.detailedDescription && athlete.detailedDescription.url,
    websiteLink: athlete.url,
  };
};

ViewAthletePage.defaultProps = {
  athleteName: "Athlete Name",
  teamName: "Team Name",
  games: [],
};

ViewAthletePage.propTypes = {
  selectedAthleteID: PropTypes.string,
  selectedTeamID: PropTypes.number,
  athleteName: PropTypes.string,
  teamName: PropTypes.string,
  seasonStats: PropTypes.object,
  gameStats: PropTypes.array,
  games: PropTypes.array,
  description: PropTypes.string,
  height: PropTypes.string,
  weight:  PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.string,
  imagePath: PropTypes.string,
  wikiLink: PropTypes.string,
  websiteLink: PropTypes.string,
};

export default connect(mapStateToProps)(ViewAthletePage);
