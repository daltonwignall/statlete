export const winsLossesPieConfig = {
  credits: {
    enabled: false
  },
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: null,
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                fontSize: "14px",
              },
          }
      }
  },
  series: [{
      name: 'Total',
      colorByPoint: true,
      data: [{
          name: 'Wins',
          y: 40,
          sliced: true,
          selected: true,
          color: "#66FCF1"
      }, {
          name: 'Losses',
          y: 22,
          color: "#CCC"
      },
      ]
  }]
};