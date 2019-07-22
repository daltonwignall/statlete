import INITIAL_STATE from "./initial-state";
import { ADD_TEAM, ADD_TEAM_GAMES } from "../actions/teams.action";

export default function (teams = INITIAL_STATE.teams, action) {
  const data = action.payload && action.payload;
  console.log(data);

  switch (action.type) {
      case ADD_TEAM:
          return true;
      case ADD_TEAM_GAMES:
          return true;
      default:
          return teams;
  }
}

