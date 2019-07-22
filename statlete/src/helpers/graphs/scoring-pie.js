export const scoringPieConfig = {
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
      pointFormat: "{series.name}: <b>{point.y}</b>"
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