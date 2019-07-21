export const playTimeScatterConfig = {
 chart: {
   type: 'scatter',
   zoomType: 'xy'
 },
 title: {
   text: null,
 },
 xAxis: {
   title: {
     enabled: true,
     text: 'Date',
     style: {
      fontSize: "14px"
     }
   },
   labels: {
    style: {
     fontSize: "14px",
    },
   },
   startOnTick: true,
   endOnTick: true,
   showLastLabel: true
 },
 yAxis: {
   title: {
     text: 'Playing Time (Minutes)',
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
           lineColor: 'rgb(100,100,100)'
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
       headerFormat: '<b>{series.name}</b><br>',
       pointFormat: '{point.x}: {point.y} minutes'
     }
   }
 },
 series: [{
   showInLegend: false,
   name: 'Playing Time',
   color: '#66FCF1',
   data: [["9/12/2018",38], ["9/15/2018", 45], ["9/17/2018", 20], ["9/19/2018", 42], ["9/22/2018", 39]],
 }]
};
