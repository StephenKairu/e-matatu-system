//Daily Table
var myArray = [
    { 'P.F No': 'A', 'Name': '30', 'Status': 'Healthy', 'Production': '500' },
    { 'P.F No': 'B', 'Name': '32', 'Status': 'Healthy', 'Production': '600' },
    { 'P.F No': 'C', 'Name': '30', 'Status': 'Healthy', 'Production': '500' },
    { 'P.F No': 'D', 'Name': '26', 'Status': 'Healthy', 'Production': '400' },
    { 'P.F No': 'E', 'Name': '32', 'Status': 'Healthy', 'Production': '600' },
    { 'P.F No': 'F', 'Name': '30', 'Status': 'Healthy', 'Production': '500' },
]

buildTable(myArray)



function buildTable(data) {
    var table = document.getElementById('myTable')
Name
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].P.FNo}</td>
                        <td>${data[i].Cows}</td>
                        <td>${data[i].Status}</td>
                        <td>${data[i].Production}</td>
                  </tr>`
        table.innerHTML += row


    }
}