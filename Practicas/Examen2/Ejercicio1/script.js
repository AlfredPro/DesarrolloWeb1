var resultado = document.getElementById("Ex2Ej1Text");
var acumulado = "";
var actual = "";
var operacion = "";
function ClicC(){
    resultado.textContent = "0";
    acumulado = "";
    actual = "";
}
function Clic1(){
    if(operacion != ""){
        acumulado += actual + operacion;
        operacion = "";
        actual = "";
    }
    actual += "1";
    resultado.innerText = actual;
}
function Clic2(){
    if(operacion != ""){
        acumulado += actual + operacion;
        operacion = "";
        actual = "";
    }
    actual += "2";
    resultado.innerText = actual;
}
function Clic3(){
    if(operacion != ""){
        acumulado += actual + operacion;
        operacion = "";
        actual = "";
    }
    actual += "3";
    resultado.innerText = actual;
}
function Clic4(){
    if(operacion != ""){
        acumulado += actual + operacion;
        operacion = "";
        actual = "";
    }
    actual += "4";
    resultado.innerText = actual;
}
function Clic5(){
    if(operacion != ""){
        acumulado += actual + operacion;
        operacion = "";
        actual = "";
    }
    actual += "5";
    resultado.innerText = actual;
}
function Clic6(){
    if(operacion != ""){
        acumulado += actual + operacion;
        operacion = "";
        actual = "";
    }
    actual += "6";
    resultado.innerText = actual;
}
function Clic7(){
    if(operacion != ""){
        acumulado += actual + operacion;
        operacion = "";
        actual = "";
    }
    actual += "7";
    resultado.innerText = actual;
}
function Clic8(){
    if(operacion != ""){
        acumulado += actual + operacion;
        operacion = "";
        actual = "";
    }
    actual += "8";
    resultado.innerText = actual;
}
function Clic9(){
    if(operacion != ""){
        acumulado += actual + operacion;
        operacion = "";
        actual = "";
    }
    actual += "9";
    resultado.innerText = actual;
}
function Clic0(){
    if(operacion != ""){
        acumulado += actual + operacion;
        operacion = "";
        actual = "";
    }
    actual += "0";
    resultado.innerText = actual;
}
function ClicP(){
    if(operacion != ""){
        acumulado += actual + operacion;
        operacion = "";
        actual = "0";
    }
    actual += ".";
    resultado.innerText = actual;
}
function ClicA(){
    if(actual.length > 0 && actual.slice(-1)=="."){
        actual += "0";
    }
    operacion = " + ";
}
function ClicS(){
    if(actual.length > 0 && actual.slice(-1)=="."){
        actual += "0";
    }
    operacion = " - ";
}
function ClicD(){
    if(actual.length > 0 && actual.slice(-1)=="."){
        actual += "0";
    }
    operacion = " / ";
}
function ClicM(){
    if(actual.length > 0 && actual.slice(-1)=="."){
        actual += "0";
    }
    operacion = " * ";
}
function ClicE(){
    //resultado.innerText = acumulado+actual;
    var fin = acumulado+actual;
    if(fin!="")
        fin = eval(fin);
        resultado.innerText = fin;
    acumulado = fin;
    actual = "";
    operacion = "";
}