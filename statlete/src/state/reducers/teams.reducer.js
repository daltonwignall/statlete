import INITIAL_STATE from "./initial-state";
import { ADD_TEAM, ADD_TEAM_GAMES, SELECT_TEAM } from "../actions/teams.action";
import { keysToCamel } from "../../helpers/shared-functions";

export default function (teams = INITIAL_STATE.teams, action) {
  const data = action.payload || {};

  console.log(action.type);

  switch (action.type) {
      case ADD_TEAM:
        return mapTeamData(teams, data);
      case ADD_TEAM_GAMES:
        return mapTeamGames(teams, data.teamID, data.games);
      case SELECT_TEAM: 
        return mapSelectedTeam(teams, data.teamID);
      default:
          return teams;
  }
}

const mapTeamData = (teams, team) => {
  const teamReCased = keysToCamel(team);
  return {
    ...teams,
    [team.id]: {
      ...teamReCased
    }
  };
};

const mapTeamGames = (teams, teamID, games) => {
  const gamesReCased = keysToCamel(games);

  const updatedTeam = {
    ...teams[teamID],
    games: gamesReCased,
  };

  return {
    ...teams,
    [teamID]: {
      ...updatedTeam
    }
  };
};

const mapSelectedTeam = (teams, teamID) => {
  return {
    ...teams,
    selectedTeamID: teamID
  };
};