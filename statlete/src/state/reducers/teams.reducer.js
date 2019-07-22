import INITIAL_STATE from "./initial-state";
import { ADD_TEAM, ADD_TEAM_GAMES } from "../actions/teams.action";
import { keysToCamel } from "../../helpers/shared-functions";

export default function (teams = INITIAL_STATE.teams, action) {
  const data = action.payload && action.payload;

  switch (action.type) {
      case ADD_TEAM: {
        return mapTeamData(teams, data);
      }
      case ADD_TEAM_GAMES: {
        return mapTeamGames(teams, 14, data);
      }
      default:
          return teams;
  }
}

const mapTeamData = (teams, team) => {
  const teamsReCased = keysToCamel(team);
  return {
    ...teams,
    ...teamsReCased
  };
};

const mapTeamGames = (teams, teamID, games) => {
  const gamesReCased = keysToCamel(games);
  console.log(games);
  const updatedTeam = {
    ...teams[teamID],
    ...gamesReCased
  };

  return {
    ...teams,
    ...updatedTeam
  };
};