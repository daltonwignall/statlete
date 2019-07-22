import { getNBAPlayer, getNBAPlayerStats, getKnowledgeGraphData } from "../../helpers/api-requests";

export const ADD_ATHLETE = "ADD_ATHLETE";
export const ADD_ATHLETE_GENERAL = "ADD_ATHLETE_GENERAL";
export const ADD_ATHLETE_STATS = "ADD_ATHLETE_STATS";

export const searchAthlete = ((fullName, onFinish) => {
  return getNBAPlayer(fullName, onFinish);
});

export const addAthlete = (athlete) => {
  const fullName =  `${athlete.first_name} ${athlete.last_name}`;
  const playerID = athlete.id;

  return dispatch => {
    dispatch({ type: ADD_ATHLETE, payload: athlete });

    // Pull general athlete info
    getKnowledgeGraphData(fullName).then((response) => {
      const returnedPerson = response.data.itemListElement[0];
      const personInfo = returnedPerson ? returnedPerson.result : {};
  
      dispatch({ type: ADD_ATHLETE_GENERAL, payload: personInfo });
      console.log(personInfo);
    })
    .catch(function (error) {
      console.log(error);
    });

    // Get stats specific to the athlete
    getNBAPlayerStats(playerID).then((response) => {
      dispatch({ type: ADD_ATHLETE_STATS, payload: response.data });
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  };
};