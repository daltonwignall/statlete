import { getNBATeamGames } from "../../helpers/api-requests";

export const ADD_TEAM = "ADD_TEAM";
export const ADD_TEAM_GAMES = "ADD_TEAM_GAMES";
export const SELECT_TEAM = "SELECT_TEAM";

export const addTeam = (team) => {
  const teamID = team.id;

  return dispatch => {
    dispatch({ type: ADD_TEAM, payload: team });

    // Get the games from the current season for the passed team
    getNBATeamGames(teamID).then((response) => {
      const payload = {
        games: response.data.data,
        teamID
      };
      dispatch({ type: ADD_TEAM_GAMES, payload });
    })
    .catch(function (error) {
      console.log(error);
    });

  };
};

export const selectTeam = (teamID) => {
  return dispatch => {
    const payload = { teamID };
    dispatch({ type: SELECT_TEAM, payload });
  };
};