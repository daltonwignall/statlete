export const fieldGoalScatterConfig = (seasonStats, gameStats) => {
  if (seasonStats && gameStats && gameStats.length && Object.keys(seasonStats).length) {
    const dates = getGamesFGAndDate(gameStats);
    
    // Sets season average FG %
    config.series[0].data = [[dates[0][0], seasonStats.fgPct], [dates[gameStats.length-1][0], seasonStats.fgPct]];
  
    // Sets game FG %'s
    config.series[1].data = [...dates];
  
    return config;
  } else {
    return {};
  }
};

const getGamesFGAndDate = (gameStats) => {
  let datesArray = gameStats.map((game, index) => {
    const fgPct = game.fgPct > 1 ? game.fgPct/100 : game.fgPct;

    return [index, fgPct];
  });

  datesArray = datesArray.sort((game1, game2) => game1[0]-game2[0]);

  return datesArray;
};

export const config = {
  credits: {
    enabled: false
  },
  chart: {
   type: "scatter",
   zoomType: "xy",
   style: {
    fontFamily: "Roboto"
  }
 },
 title: {
   text: null,
 },
 xAxis: {
   title: {
     enabled: true,
     text: "Game #",
     style: {
      fontSize: "14px"
     }
   },
   labels: {
    style: {
     fontSize: "14px",
    },
   },
 },
 yAxis: {
   title: {
     text: "FG %",
     style: {
      fontSize: "14px"
     }
   },
   labels: {
    style: {
     fontSize: "14px",
    },
   },
 },
 plotOptions: {
   scatter: {
     marker: {
       radius: 5,
       states: {
         hover: {
           enabled: true,
           lineColor: "rgb(100,100,100)"
         }
       }
     },
     states: {
       hover: {
         marker: {
           enabled: false
         }
       }
     },
     tooltip: {
       headerFormat: "<b>{series.name}</b><br>",
       pointFormat: "{point.x}: {point.y:.2f}%"
     }
   }
 },
 series: [
  {
    type: "line",
    name: "FG % Average For Season",
  },
  {
   showInLegend: true,
   name: "FG % Average Per Game",
   color: "#66FCF1",
 }]
};
