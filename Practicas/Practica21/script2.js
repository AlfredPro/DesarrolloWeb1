function loadData(){
    if (localStorage.getItem("producto1") === null){
        localStorage.producto1 = "Pizza";
        localStorage.producto2 = "Hamburguesa";
        localStorage.producto3 = "Tamales";
        localStorage.producto4 = "Comida china";
        localStorage.producto5 = "Spaguetti";
        localStorage.producto6 = "Pollo";
        localStorage.producto7 = "Pescado";
        localStorage.producto8 = "Hot cakes";
        localStorage.producto9 = "Helado";
        localStorage.producto10 = "Ensalada";
        localStorage.valor1 = "58";
        localStorage.valor2 = "64";
        localStorage.valor3 = "46";
        localStorage.valor4 = "48";
        localStorage.valor5 = "54";
        localStorage.valor6 = "96";
        localStorage.valor7 = "75";
        localStorage.valor8 = "58";
        localStorage.valor9 = "35";
        localStorage.valor10 = "70";
    }
    var lista = document.getElementById("Practice21ProductList");
    if(localStorage.getItem("userType") == "admin"){
        for(var i = 0; i<10; i++){
            var li = document.createElement("li");
            var textbox1 = document.createElement("input");
            textbox1.setAttribute("type", "text");
            var textbox2 = document.createElement("input");
            textbox2.setAttribute("type", "text");
            textbox1.setAttribute("value", localStorage.getItem("producto"+(i+1)));
            textbox2.setAttribute("value", localStorage.getItem("valor"+(i+1)));
            li.appendChild(textbox1);
            li.appendChild(textbox2);
            lista.appendChild(li);
        }
    }else{
        for(var i = 0; i<10; i++){
            var li = document.createElement("li");
            li.textContent = localStorage.getItem("producto"+(i+1))+": "+localStorage.getItem("valor"+(i+1));
            lista.appendChild(li);
        }
    }
}