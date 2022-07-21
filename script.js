// google.charts.load("current", {packages:["corechart"]});
//       google.charts.setOnLoadCallback(drawChart);
//       function drawChart() {
//         var data = google.visualization.arrayToDataTable([
//           ['Task', 'Hours per Day'],
//           ['Work',     11],
//           ['Eat',      2],
//           ['Commute',  2],
//           ['Watch TV', 2],
//           ['Sleep',    7]
//         ]);

//         var options = {
//           title: 'My Daily Activities',
//           pieHole: 0.4,
//         };

//         var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
//         chart.draw(data, options);
//       }


google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Trips', '', { role: 'style'}],
        ['Completed', 15, 'green'],
        ['NotCompleted',5, "black"],
        
    ]);

    var  options = {
        title: 'Daily Trips',
        pieHole: 0.6,
        style :['black']
    };

    

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}

var arrDepart=new Array();
var arrNames=new Array();
var arrTrips=new Array();
 
function savedata(){
    var name = document.getElementById('name').value;
    var depart = document.getElementById('depart').value;
    var trip = document.getElementById('trip').value;
    arrDepart[arrDepart.length]=depart;    
    arrNames[arrNames.length]=name;
    arrTrips[arrTrips.length]=trip;
  }
   
 
function displayData() 
{
  var content="<b>Data Entered by Stage Manager :</b><br>";
  content+= [...arrNames]+"</br>";
  content+=[...arrTrips]+"</br>";
  content+=[...arrDepart]+"</br>";
  
 
  document.getElementById('display').innerHTML = content;
}
 