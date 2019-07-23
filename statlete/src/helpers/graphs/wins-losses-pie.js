export const winsLossesPieConfig = (games, teamID) => {
  if (games.length) {
    const record = calculateWinsAndLosses(games, teamID);
    
    // Sets wins
    config.series[0].data[0].y = record.wins;
  
    // Set Losses
    config.series[0].data[1].y = record.losses;
  
    return config;
  } else {
    return {};
  }
};

const calculateWinsAndLosses = (games, teamID) => {
  let wins = 0;
  let losses = 0;

  games.forEach((game) => {
    const { player, opponent } = matchPlayerScores(game, teamID);

    if (player >= opponent) {
      wins += 1;
    } else {
      losses += 1;
    }
  });

  return { wins, losses };
};

const matchPlayerScores = (game, teamID) => {
  if (game.homeTeam.id === teamID) {
    return { player: game.homeTeamScore, opponent: game.visitorTeamScore };
  } else if (game.visitorTeam.id === teamID) {
    return { player: game.visitorTeamScore, opponent: game.homeTeamScore };
  }
};

const config = {
  credits: {
    enabled: false
  },
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
    style: {
      fontFamily: "Roboto"
    }
  },
  title: {
    text: null,
  },
  tooltip: {
    pointFormat: "{point.name}: <b>{point.y}</b>"
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.y}",
          style: {
            fontSize: "14px",
          },
      }
    }
  },
  series: [{
    name: "Total",
    colorByPoint: true,
    data: [{
        name: "Wins",
        sliced: true,
        selected: true,
        color: "#66FCF1"
    }, {
        name: "Losses",
        color: "#CCC"
    }]
  }]
};