import { combineReducers } from "redux";
import athletes from "./athletes.reducer";
import teams from "./teams.reducer.js";

const rootReducer = combineReducers({
  athletes,
  teams
});

export default rootReducer;
