import axios from "axios";

/*
  If I had more time I would definitely figure out a more secure way to store
  these API keys. They are for publicly available APIs through my personal account.
*/
const googleAPIKey = "AIzaSyC4jtfY_oUqaeVcM9QXz4nZxpTt_iMkKck";
const nbaAPIEndpoint = "https://www.balldontlie.io/api/v1/";

/* To keep this simple, and because there are no UI filters
   all the data we pull will be for the previous 2018-2019 season */
export const getNBAPlayer = (fullName, onFinish) => {
  axios.get(`${nbaAPIEndpoint}/players`, {
    params: {
      search: fullName,
      limit: 3
    }
  })
  .then(function (response) {
    const athlete = response.data.data[0];
    onFinish(athlete);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const getKnowledgeGraphData = (fullName) => {
  return axios.get("https://kgsearch.googleapis.com/v1/entities:search", {
    params: {
      key: googleAPIKey,
      query: fullName,
      limit: 1
    }
  });
};

export const getNBAPlayerSeasonStats = (playerID) => {
  return axios.get(`${nbaAPIEndpoint}/season_averages`, {
    params: {
      player_ids: [playerID],
      seasons: [2018]
    }
  });
};

export const getNBAPlayerGameStats = (playerID) => {
  return axios.get(`${nbaAPIEndpoint}/stats`, {
    params: {
      player_ids: [playerID],
      per_page: 100,
      seasons: [2018]
    }
  });
};

export const getNBATeamGames = (teamID) => {
  return axios.get(`${nbaAPIEndpoint}/games`, {
    params: {
      team_ids: [teamID],
      per_page: 100,
      postseason: false,
      seasons: [2018]
    }
  });
};