import axios from "axios";

/*
  If I had more time I would definitely figure out a more secure way to store
  these API keys, even though technically they are just for publicly available APIs
*/
const googleAPIKey = "AIzaSyC4jtfY_oUqaeVcM9QXz4nZxpTt_iMkKck";

const nbaAPIEndpoint = "https://www.balldontlie.io/api/v1/";

export const getKnowledgeGraphData = (fullName) => {
  axios.get("https://kgsearch.googleapis.com/v1/entities:search", {
    params: {
      key: googleAPIKey,
      query: fullName,
      limit: 1
    }
  })
  .then(function (response) {
    const returnedPerson = response.data.itemListElement[0];
    const personInfo = returnedPerson ? returnedPerson.result : {};

    console.log(personInfo);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const getNBAPlayer = (fullName) => {
  axios.get(`${nbaAPIEndpoint}/players`, {
    params: {
      search: fullName,
      limit: 1
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const getNBAPlayerStats = (playerID) => {
  axios.get(`${nbaAPIEndpoint}/season_averages`, {
    params: {
      player_ids: [playerID]
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
};