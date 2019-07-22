import INITIAL_STATE from "./initial-state";
import { ADD_TEAM } from "../actions/teams.action";

export default function (teams = INITIAL_STATE.teams, action) {
  const data = action.payload && action.payload.data;

  switch (action.type) {
      case ADD_TEAM:
          return true;
      default:
          return teams;
  }
}

