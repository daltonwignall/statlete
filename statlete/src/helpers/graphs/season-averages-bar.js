export const seasonAveragesBarConfig = {
  credits: {
    enabled: false
  },
  chart: {
      type: 'bar',
  },
  title: {
      text: null,
  },
  xAxis: {
     categories: ['Steals', 'Assists', 'Points', 'Rebounds'],
     labels: {
      style: {
        fontSize: "14px",
      },
    },
  },
  yAxis: {
    labels: {
      style: {
        fontSize: "14px",
      },
    },
    title: {
      text: 'Amount',
      style: {
        fontSize: "14px"
      }
    },
  },
  plotOptions: {
    bar: {
      shadow: false,
      pointPadding: 0.01,
      groupPadding: 0.05
    }
   },
  series: [
      {
          showInLegend: false,
          data: [
              { y: 6, color: "#00AECA"},
              { y: 14, color: "#66FCF1"},
              { y: 20, color: "#1F2833"},
              { y: 11, color: "#45A29E"},
          ]
      },
      
  ],
};
