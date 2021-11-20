var carrito = new Array(10).fill(0);
function loadData(){
    if (localStorage.getItem("producto0") === null){
        localStorage.producto0 = "Pizza";
        localStorage.producto1 = "Hamburguesa";
        localStorage.producto2 = "Tamales";
        localStorage.producto3 = "Comida china";
        localStorage.producto4 = "Spaguetti";
        localStorage.producto5 = "Pollo";
        localStorage.producto6 = "Pescado";
        localStorage.producto7 = "Hot cakes";
        localStorage.producto8 = "Helado";
        localStorage.producto9 = "Ensalada";
        localStorage.valor0 = "58";
        localStorage.valor1 = "64";
        localStorage.valor2 = "46";
        localStorage.valor3 = "48";
        localStorage.valor4 = "54";
        localStorage.valor5 = "96";
        localStorage.valor6 = "75";
        localStorage.valor7 = "58";
        localStorage.valor8 = "35";
        localStorage.valor9 = "70";
    }
    var lista = document.getElementById("Practice21ProductList");
    if(localStorage.getItem("userType") == "admin"){
        var li = document.createElement("li");
        li.textContent = "Cambie nombre o precio y presione enter para guardar";
        lista.appendChild(li);
        for(var i = 0; i<10; i++){
            var li = document.createElement("li");
            var textbox1 = document.createElement("input");
            textbox1.setAttribute("type", "text");
            var textbox2 = document.createElement("input");
            textbox2.setAttribute("type", "text");
            textbox1.setAttribute("value", localStorage.getItem("producto"+i));
            textbox2.setAttribute("value", localStorage.getItem("valor"+i));
            li.appendChild(textbox1);
            li.appendChild(textbox2);
            textbox1.setAttribute("id", "Practice21ElementName"+i);
            textbox2.setAttribute("id", "Practice21ElementPrice"+i);
            textbox1.addEventListener("keyup", function(event) {
                if (event.code == 'Enter') {
                    var texto = this.value;
                    if(texto != ""){
                        localStorage.setItem("producto"+(this.id).replace("Practice21ElementName",""), texto);
                    }
                }
            });
            textbox2.addEventListener("keyup", function(event) {
                if (event.code == 'Enter') {
                    var texto = this.value;
                    if(texto != ""){
                        localStorage.setItem("valor"+(this.id).replace("Practice21ElementPrice",""), texto);
                    }
                }
            });
            lista.appendChild(li);
        }
    }else{
        for(var i = 0; i<10; i++){
            var li = document.createElement("li");
            var label = document.createElement("label");
            label.textContent = localStorage.getItem("producto"+i)+": "+localStorage.getItem("valor"+i);
            var boton = document.createElement("button");
            boton.setAttribute("title", "Comprar");
            boton.setAttribute("value", "Comprar");
            boton.setAttribute("type", "button");
            boton.setAttribute("class", "btn-primary");
            boton.innerHTML = "Comprar";
            boton.setAttribute("id", "Practice21Button"+i);
            boton.onclick = function () {
                //alert("Comprar "+ localStorage.getItem("producto"+(this.id).replace("Practice21Button",""))+": "+localStorage.getItem("valor"+(this.id).replace("Practice21Button","")));
                carrito[(this.id).replace("Practice21Button","")]++;
              };
            li.appendChild(label);
            li.appendChild(boton);
            lista.appendChild(li);
        }
        var estediv = document.getElementById("Practice21BuyDiv");
        var boton = document.createElement("button");
            boton.setAttribute("title", "Ver Carrito");
            boton.setAttribute("value", "Ver Carrito");
            boton.setAttribute("type", "button");
            boton.setAttribute("class", "btn-primary");
            boton.innerHTML = "Ver Carrito";
            boton.setAttribute("id", "Practice21Button"+i);
            boton.onclick = function () {
                var total = 0;
                var alertText = "";
                for(var i=0; i<10; i++){
                    if(carrito[i]>0){
                        alertText+=carrito[i].toString()+" ";
                        var totArt = carrito[i]*parseInt(localStorage.getItem("valor"+i));
                        alertText+=localStorage.getItem("producto"+i)+": "+totArt.toString()+"\n";
                        total+=totArt;
                    }
                }
                alertText+="Total: "+total.toString();
                alert(alertText);
              };
            estediv.appendChild(boton);
    }
}