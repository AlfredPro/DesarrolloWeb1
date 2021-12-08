function loadListEmpleados(){
    var request = new XMLHttpRequest();
    var url = "https://dummy.restapiexample.com/api/v1/employees";
    var lista = document.getElementById("FinalListaEmpleados");
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        console.log(obj);
        var data = obj.data;
        data.forEach(element => {
            var li = document.createElement("li");
            li.setAttribute("class", "list-group-item");
            li.setAttribute("style", "background-color: #67b5fa28;");
            li.textContent = element.employee_name+", edad: "+element.employee_age;
            lista.appendChild(li);
        });
    }
    request.send();
}
function loadListNoticias(){
    var request = new XMLHttpRequest();
    var url = "https://newsapi.org/v2/everything?qInTitle=animal&language=es&apiKey=bd44e6060e154f42a52471e156ae59f0";
    var lista = document.getElementById("Practice22List");
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        console.log(obj);
        var data = obj.articles;
        var i=0;/*
        data.forEach(element => {
            var li = document.createElement("li");
            li.setAttribute("class", "list-group-item");
            li.textContent = element.title;
            lista.appendChild(li);
        });*/
        for(var i=0; i<3&&i<obj.totalResults; i++){
            var element = data[i];
            var imgn = document.getElementById("FinalImg"+i);
            var titlen = document.getElementById("FinalTitulo"+i);
            var textn = document.getElementById("FinalTexto"+i);
            var linkn = document.getElementById("FinalLink"+i);
            imgn.setAttribute("src", element.urlToImage);
            titlen.textContent = element.title;
            textn.textContent = element.description;
            linkn.setAttribute("href", element.url);
        }
    }
    request.send();
}
function loadListPerro(){
    var request = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breeds/image/random";
    var lista = document.getElementById("Practice22List");
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        console.log(obj);
        var img = document.getElementById("FinalImagenPerro");
        img.setAttribute("src", obj.message);
    }
    request.send();
}
function loadListGato(){
    var request = new XMLHttpRequest();
    var url = "https://catfact.ninja/fact?max_length=200";
    var lista = document.getElementById("Practice22List");
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        console.log(obj);
        var parra = document.getElementById("FinalDatoGato");
        parra.textContent = obj.fact;
    }
    request.send();
}
function loadAPIS(){
    loadListNoticias();
    loadListPerro();
    loadListGato();
}