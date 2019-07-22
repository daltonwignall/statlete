import { getNBATeamGames } from "../../helpers/api-requests";

export const ADD_TEAM = "ADD_TEAM";
export const ADD_TEAM_GAMES = "ADD_TEAM_GAMES";

export const addTeam = (team) => {
  const teamID = team.id;

  return dispatch => {
    dispatch({ type: ADD_TEAM, payload: team });

    // Get the games from the current season for the passed team
    getNBATeamGames(teamID).then((response) => {
      dispatch({ type: ADD_TEAM_GAMES, payload: response.data.data[0] });
    })
    .catch(function (error) {
      console.log(error);
    });

  };
};