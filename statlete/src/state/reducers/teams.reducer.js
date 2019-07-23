import INITIAL_STATE from "./initial-state";
import { ADD_TEAM, ADD_TEAM_GAMES } from "../actions/teams.action";
import { keysToCamel } from "../../helpers/shared-functions";

export default function (teams = INITIAL_STATE.teams, action) {
  const data = action.payload || {};

  switch (action.type) {
      case ADD_TEAM: {
        return mapTeamData(teams, data);
      }
      case ADD_TEAM_GAMES: {
        return mapTeamGames(teams, data.teamID, data.games);
      }
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