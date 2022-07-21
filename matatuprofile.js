
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Trips', 'Number'],
          ['Complete',     15],
          ['Not Completed',      5],
        ]);

        var options = {
          title: 'Today Trips',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }

var arrDepart=new Array();
var arrRoute=new Array();
var arrNames=new Array();
var arrTrips=new Array();
 
function savedata(){
    var name = document.getElementById('name').value;
    var route = document.getElementById('route').value;
    var depart = document.getElementById('depart').value;
    var trip = document.getElementById('trip').value;
    arrDepart[arrDepart.length]=depart;
    arrRoute[arrRoute.length]=route;  
    arrNames[arrNames.length]=name;
    arrTrips[arrTrips.length]=trip;
  }
   
 
function displayData() 
{
  var content="<b>Data Entered by Stage Manager :</b><br>";
  content+= [...arrNames]+"</br>"+"</br>";
  content+= [...arrRoute]+"</br>"+"</br>";
  content+=[...arrTrips]+"</br>"+"</br>";
  content+=[...arrDepart]+"</br>"+"</br>";
  
 
  document.getElementById('display').innerHTML = content;
}
 