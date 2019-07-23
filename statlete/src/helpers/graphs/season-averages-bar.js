export const seasonAveragesBarConfig = (seasonStats) => {
  if (seasonStats && Object.keys(seasonStats).length) {    
    // Sets steals
    config.series[0].data = [seasonStats.stl];
  
    // Set assists
    config.series[1].data = [seasonStats.ast];

    // Sets points
    config.series[2].data = [seasonStats.pts];

    // Set rebounds
    config.series[3].data = [seasonStats.reb];
  
    return config;
  } else {
    return {};
  }
};

export const config = {
  credits: {
    enabled: false
  },
  chart: {
      type: "bar",
      style: {
        fontFamily: "Roboto"
      }
  },
  title: {
      text: null,
  },
  xAxis: {
    visible: false,
  },
  yAxis: {
    labels: {
      style: {
        fontSize: "14px",
      },
    },
    title: {
      text: "Amount",
      style: {
        fontSize: "14px"
      }
    },
  },
  tooltip: {
    headerFormat: "<b>{series.name}</b><br>",
    pointFormat: "{point.y}"
  },
  plotOptions: {
    bar: {
      shadow: false,
      pointPadding: 0.01,
      groupPadding: 0.05
    },
   },
  series: [
    {
      name: "Steals",
      color: "#00AECA"
    },
    {
      name: "Assists",
      color: "#66FCF1"
    },
    {
      name: "Points",
      color: "#1F2833"
    },
    {
      name: "Rebounds",
      color: "#45A29E"
    }
  ],
};
