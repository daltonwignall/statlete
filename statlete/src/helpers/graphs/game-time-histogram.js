export const gameTimeHistogramConfig = {
	credits: {
    enabled: false
  },
  chart: {
    type: "column"
  },
  title: {
    text: null
  },
  subtitle: {
    text: ""
  },
  xAxis: {
    title: {
      text: "Time",
      style: {
        fontSize: "14px",
      },
    },
    categories: [
      "3:00 PM",
      "7:00 PM",
      "1:30 PM",
      "10:00 AM",
      "5:00 PM"
    ],
    labels: {
      style: {
        color: "#333",
        fontSize: "14px"
      }
    },
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: "Amount",
      style: {
        fontSize: "14px",
      },
    },
    labels: {
      style: {
        color: "#333",
        fontSize: "14px"
      }
    }
  },
  plotOptions: {
    column: {
      pointPadding: 0.01,
      borderWidth: 0,
      groupPadding: 0,
      shadow: false
    }
  },
  legend: {
    itemStyle: {
      fontSize: "14px"
    }
	},
  series: [{
    name: "Amount",
    showInLegend: false,
    data: [10, 20, 12, 3, 15],
		color: "#66FCF1",
    backgroundColor: "transparent"
  }]
};