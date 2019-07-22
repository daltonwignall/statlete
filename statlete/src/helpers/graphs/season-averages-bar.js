export const seasonAveragesBarConfig = {
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
      data: [6],
      color: "#00AECA"
    },
    {
      name: "Assists",
      data: [14],
      color: "#66FCF1"
    },
    {
      name: "Points",
      data: [20],
      color: "#1F2833"
    },
    {
      name: "Rebounds",
      data: [11],
      color: "#45A29E"
    }
  ],
};
