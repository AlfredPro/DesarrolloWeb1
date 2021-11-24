var request = new XMLHttpRequest();

var url = "https://dummy.restapiexample.com/api/v1/employees";
var lista = document.getElementById("Practice22List");
request.open('GET', url);
//request.send();
request.onload = function(){
    var obj = JSON.parse(request.response);
    console.log(obj);
    var data = obj.data;
    console.log(data);
    var name = data[1].employee_name;
    console.log(name);
    data.forEach(element => {
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        li.textContent = element.employee_name+", salario: "+element.employee_salary+", edad: "+element.employee_age;
        lista.appendChild(li);
    });
}
request.send()