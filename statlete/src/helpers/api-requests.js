import axios from "axios";

/*
  If I had more time I would definitely figure out a more secure way to store
  these API keys, even though technically they are just for publicly available APIs
*/
const googleAPIKey = "AIzaSyC4jtfY_oUqaeVcM9QXz4nZxpTt_iMkKck";

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