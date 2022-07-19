
anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "Nissan", value: 210},
        {x: "Mini Bus", value: 140},
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