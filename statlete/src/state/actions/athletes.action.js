import { getNBAPlayer, getNBAPlayerSeasonStats, getNBAPlayerGameStats, getKnowledgeGraphData } from "../../helpers/api-requests";

export const ADD_ATHLETE = "ADD_ATHLETE";
export const ADD_ATHLETE_GENERAL = "ADD_ATHLETE_GENERAL";
export const ADD_ATHLETE_SEASON_STATS = "ADD_ATHLETE_SEASON_STATS";
export const ADD_ATHLETE_GAME_STATS = "ADD_ATHLETE_GAME_STATS";
export const SELECT_ATHLETE = "SELECT_ATHLETE";

export const searchAthlete = ((fullName, onFinish) => {
  return getNBAPlayer(fullName, onFinish);
});

export const addAthlete = (athlete) => {
  const fullName =  `${athlete.first_name} ${athlete.last_name}`;
  const athleteID = athlete.id;

  return dispatch => {
    dispatch({ type: ADD_ATHLETE, payload: athlete });

    // Pull general athlete info
    getKnowledgeGraphData(fullName).then((response) => {
      const returnedPerson = response.data.itemListElement[0];
      const general = returnedPerson ? returnedPerson.result : {};
      const payload = { athleteID, general };
  
      dispatch({ type: ADD_ATHLETE_GENERAL, payload });
    })
    .catch(function (error) {
      console.log(error);
    });

    // Get stat averages across season for athlete
    getNBAPlayerSeasonStats(athleteID).then((response) => {
      const seasonStats = response.data.data[0];
      const payload = { athleteID, seasonStats };

      dispatch({ type: ADD_ATHLETE_SEASON_STATS, payload });
    })
    .catch(function (error) {
      console.log(error);
    });

    // Get stats from each game for athlete
    getNBAPlayerGameStats(athleteID).then((response) => {
      const gameStats = response.data.data;
      const payload = { athleteID, gameStats };

      dispatch({ type: ADD_ATHLETE_GAME_STATS, payload });
    })
    .catch(function (error) {
      console.log(error);
    });
  };
};

export const selectAthlete = (athleteID) => {
  return dispatch => {
    const payload = { athleteID };
    dispatch({ type: SELECT_ATHLETE, payload });
  };
};