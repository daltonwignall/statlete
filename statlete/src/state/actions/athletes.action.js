import { getNBAPlayer } from "../../helpers/api-requests";

export const ADD_ATHLETE = "ADD_ATHLETE";

export const searchAthlete = (fullName, onFinish) => {
  return getNBAPlayer(fullName, onFinish);
};

export const addAthlete = (fullName) => {
  return getNBAPlayer(fullName);
};