import INITIAL_STATE from "./initial-state";
import { ADD_ATHLETE } from "../actions/athletes.action";

export default function (athletes = INITIAL_STATE.athletes, action) {
  const data = action.payload && action.payload.data;

  switch (action.type) {
      case ADD_ATHLETE:
          return true;
      default:
          return athletes;
  }
}
