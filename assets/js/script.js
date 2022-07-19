
anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "Nissan", value: 2000},
        {x: "Mini Bus", value: 2400},
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Number of Trips for types of vehicles daily");
  
    // add the data
    chart.data(data);
  
    // display the chart in the container
    chart.container('container');
    chart.draw();
  
  });

  //vehicles doughnut chart
  var xValues = ["Active", "Repair", "Impounded"];
var yValues = [138, 30, 12];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Vehicle status"
    }
  }
});

//revenue graphs
var xValues2 = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues2,
    datasets: [{ 
      data: [6600,5500,5000,5000,4700,4500,3000],
      borderColor: "red",
      fill: false
    }, { 
      data: [3300,3000,3000,4500,5000,4000,1000],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    title: {
      display: true,
      text: "Weekly Revenues in '000"
    }
  }
});