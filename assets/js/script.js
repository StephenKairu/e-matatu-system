
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


google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
// Set Data
var data = google.visualization.arrayToDataTable([
  ['Day', 'Revenue'],
  [1,9900],[2,8500],[3,8000],[4,9500],[5,9700],
  [6,8500],[7,7000]
]);
// Set Options
var options = {
  title: 'Weekly Revenues in 000',
  hAxis: {title: 'Day of the week'},
  vAxis: {title: 'Revenues'},
  legend: 'none'
};
// Draw
var chart = new google.visualization.LineChart(document.getElementById('myChart2'));
chart.draw(data, options);
}