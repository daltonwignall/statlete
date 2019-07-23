import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FaChartBar, FaBook, FaChartPie, FaTwitter } from "react-icons/fa";
import ReactHighcharts from "react-highcharts";
import { DataContainer, StatArrows, Bio } from "../components";
import { seasonAveragesBarConfig, playTimeScatterConfig,
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
      <ReactHighcharts key="season-averages" config={seasonAveragesBarConfig} />,
      <ReactHighcharts key="play-time" config={playTimeScatterConfig} />
    ];

    return graphs[index];
  }

  getTeamStatsGraph(index) {
    const graphs = [
      <ReactHighcharts key="wins-losses" config={winsLossesPieConfig} />,
      <ReactHighcharts key="game-time" config={scoringPieConfig} />
    ];

    return graphs[index];
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
            subTitle="Stat"
          >
            {this.getAthleteStatsGraph(athleteStatsIndex)}
          </DataContainer>
          <DataContainer
            className="team-stats-container"
            leftHeaderContent={<FaChartPie className="header-icon"/>}
            rightHeaderContent={<StatArrows onClick={this.updateTeamStatsIndex} statsLength={2} currentIndex={teamStatsIndex}/>}
            title={teamName}
            subTitle="Stat"
          >
            {this.getTeamStatsGraph(this.state.teamStatsIndex)}
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

const mapStateToProps = ({ athletes, teams, selectedAthleteID = 237, selectedTeamID = 14 }) => {
  const athlete = athletes[selectedAthleteID] || {};
  const team = teams[selectedTeamID] || {};

  console.log(athlete, team);

  return {
    athleteName: athlete.name,
    teamName: team.fullName,
    seasonStats: athlete.seasonStats,
    gameStats: athlete.gameStats,
    games: team.games,
    description: athlete.detailedDescription && athlete.detailedDescription.articleBody,
    height: `${athlete.heightFeet}' ${athlete.heightInches}"`,
    weight: athlete.weight,
    position: athlete.position,
    imagePath: athlete.image && athlete.image.contentUrl,
    wikiLink: athlete.detailedDescription && athlete.detailedDescription.url,
    websiteLink: athlete.url,
  };
};

ViewAthletePage.defaultProps = {
  athleteName: "Athlete Name",
  teamName: "Team Name"
};

ViewAthletePage.propTypes = {
  athleteName: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.string,
  weight: PropTypes.string,
  position: PropTypes.string,
  teamName: PropTypes.string,
  imagePath: PropTypes.string,
  wikiLink: PropTypes.string,
  websiteLink: PropTypes.string,
};

export default connect(mapStateToProps)(ViewAthletePage);
