import INITIAL_STATE from "./initial-state";
import { ADD_ATHLETE, ADD_ATHLETE_GENERAL,
  ADD_ATHLETE_SEASON_STATS, ADD_ATHLETE_GAME_STATS, SELECT_ATHLETE } from "../actions/athletes.action";
import { keysToCamel } from "../../helpers/shared-functions";

export default function (athletes = INITIAL_STATE.athletes, action) {
  const data = action.payload || {};

  switch (action.type) {
      case ADD_ATHLETE:
        return mapAthleteData(athletes, data);
      case ADD_ATHLETE_GENERAL:
        return mapAthleteGeneralData(athletes, data.athleteID, data.general);
      case ADD_ATHLETE_SEASON_STATS:
        return mapAthleteSeasonStatsData(athletes, data.athleteID, data.seasonStats);
      case ADD_ATHLETE_GAME_STATS:
        return mapAthleteGameStatsData(athletes, data.athleteID, data.gameStats);
      case SELECT_ATHLETE:
        return mapSelectedAthlete(athletes, data.athleteID);
      default:
          return athletes;
  }
}

const mapAthleteData = (athletes, athlete) => {
  const athleteReCased = keysToCamel(athlete);

  return {
    ...athletes,
    [athlete.id]: {
      ...athleteReCased
    }
  };
};

const mapAthleteGeneralData = (athletes, athleteID, athleteGeneral) => {
  const generalReCased = keysToCamel(athleteGeneral);
  const updatedAthlete = {
    ...athletes[athleteID],
    ...generalReCased,
  };

  return {
    ...athletes,
    [athleteID]: {
      ...updatedAthlete
    }
  };
};

const mapAthleteSeasonStatsData = (athletes, athleteID, seasonStats) => {
  const seasonStatsReCased = keysToCamel(seasonStats);
  
  const updatedAthlete = {
    ...athletes[athleteID],
    seasonStats: seasonStatsReCased,
  };

  return {
    ...athletes,
    [athleteID]: {
      ...updatedAthlete
    }
  };
};

const mapAthleteGameStatsData = (athletes, athleteID, gameStats) => {
  const gameStatsReCased = keysToCamel(gameStats);

  const updatedAthlete = {
    ...athletes[athleteID],
    gameStats: gameStatsReCased,
  };

  return {
    ...athletes,
    [athleteID]: {
      ...updatedAthlete
    }
  };
};

const mapSelectedAthlete = (athletes, athleteID) => {
  return {
    ...athletes,
    selectedAthleteID: athleteID
  };
};