export const winsLossesPieConfig = (games) => {
  console.log(games);
  config.series[0].data[0].y = 40;
  config.series[0].data[1].y = 22;
  return config;
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
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
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