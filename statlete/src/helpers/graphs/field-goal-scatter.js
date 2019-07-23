export const fieldGoalScatterConfig = {
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
     text: "Game Date",
     style: {
      fontSize: "14px"
     }
   },
   labels: {
    style: {
     fontSize: "14px",
    },
   },
   tickInterval: 1,
   startOnTick: true,
   endOnTick: true,
   showLastLabel: true
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
       pointFormat: "{point.x}: {point.y} minutes"
     }
   }
 },
 series: [
  {
    type: "line",
    name: "FG % Average",
    data: [[1, 36], [5, 36]],
  },
  {
   showInLegend: false,
   name: "Playing Time",
   color: "#66FCF1",
   data: [[1,38], [2, 45], [3, 20], [4, 42], [5, 39]],
 }]
};
