var circulos = document.getElementById("practice19cont").getElementsByTagName("div");
var textResultado = document.getElementById("practice19Resultado");
var textColor = document.getElementById("practice19P1");
var unTexto = "";
var puntaje = 0;
var intentos = 0;
var res = 0;
var nIntentos = 10;
//alert(circulos.length);
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function resColores(){
    if(intentos>=nIntentos){
        textResultado.textContent = unTexto+"\nTu puntaje es "+puntaje;
    }else{
        if(intentos>0) {textResultado.textContent = unTexto;}
        res = getRandomInt(1,5);
        for(var i=0; i<circulos.length; i++){
            circulos[i].style.backgroundColor = 'rgb('+getRandomInt(0, 255)+','+getRandomInt(0, 255)+','+getRandomInt(0, 255)+')'; 
        }
        textColor.textContent = circulos[res].style.backgroundColor.substring(3);
    }
}

function click1(){
    if(intentos<nIntentos){
        if(res==1){
            unTexto = "Correcto!!";
            puntaje = puntaje+1;
        }else{
            unTexto = "Incorrecto :(";
        }
        intentos = intentos+1;
        resColores();
    }
}
function click2(){
    if(intentos<nIntentos){
        if(res==2){
            unTexto = "Correcto!!";
            puntaje = puntaje+1;
        }else{
            unTexto = "Incorrecto :(";
        }
        intentos = intentos+1;
        resColores();
    }
}
function click3(){
    if(intentos<nIntentos){
        if(res==3){
            unTexto = "Correcto!!";
            puntaje = puntaje+1;
        }else{
            unTexto = "Incorrecto :(";
        }
        intentos = intentos+1;
        resColores();
    }
}
function click4(){
    if(intentos<nIntentos){
        if(res==4){
            unTexto = "Correcto!!";
            puntaje = puntaje+1;
        }else{
            unTexto = "Incorrecto :(";
        }
        intentos = intentos+1;
        resColores();
    }
}
function click5(){
    if(intentos<nIntentos){
        if(res==5){
            unTexto = "Correcto!!";
            puntaje = puntaje+1;
        }else{
            unTexto = "Incorrecto :(";
        }
        intentos = intentos+1;
        resColores();
    }
}

function resetGame(){
    textResultado.textContent = "";
    puntaje = 0;
    intentos = 0;
    resColores();
}
resColores();