
export const scoringPieConfig = (games, teamID) => {
  if (games.length) {
    const scoring = calculateScoring(games, teamID);
    
    // Sets player team scoring
    config.series[0].data[0].y = scoring.playerAvg;

    // Set opponent scoring
    config.series[0].data[1].y = scoring.opponentAvg;

    return config;
  } else {
    return {};
  }
};

const calculateScoring = (games, teamID) => {
  let playerAvg = 0;
  let opponentAvg = 0;

  games.forEach((game) => {
    const { player, opponent } = matchPlayerScores(game, teamID);

    playerAvg += player;
    opponentAvg += opponent;
  });

  playerAvg = playerAvg / games.length;
  opponentAvg = opponentAvg / games.length;

  return { playerAvg, opponentAvg };
};

const matchPlayerScores = (game, teamID) => {
  if (game.homeTeam.id === teamID) {
    return { player: game.homeTeamScore, opponent: game.visitorTeamScore };
  } else if (game.visitorTeam.id === teamID) {
    return { player: game.visitorTeamScore, opponent: game.homeTeamScore };
  }
};

export const config = {
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
   pointFormat: "{series.name}: <b>{point.y:,.0f}</b>"
 },
 plotOptions: {
   pie: {
     allowPointSelect: true,
     cursor: "pointer",
     dataLabels: {
       enabled: true,
       format: "<b>{point.name}</b>: {point.y:,.0f}",
       style: {
        fontSize: "14px",
       },
     }
   }
 },
 series: [{
   name: "PPG",
   colorByPoint: true,
   data: [{
     name: "Team",
     y: 110,
     sliced: true,
     selected: true,
     color: "#66FCF1"
   }, {
     name: "Opponent",
     y: 89,
     color: "#CCC"
   },
   ]
 }]
};