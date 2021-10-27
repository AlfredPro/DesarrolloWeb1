var pregunta = document.getElementById("Ex2Ej3Pregunta");
var npreg = document.getElementById("Ex2Ej3Num");
var boton = document.getElementById("Ex2Ej3S");

var rb1 = document.getElementById("Ex2Ej3B1");
var rb2 = document.getElementById("Ex2Ej3B2");
var rb3 = document.getElementById("Ex2Ej3B3");
var rb4 = document.getElementById("Ex2Ej3B4");
var radioGroup = document.getElementsByName("answers");

var lb1 = document.getElementById("Ex2Ej3B1lb");
var lb2 = document.getElementById("Ex2Ej3B2lb");
var lb3 = document.getElementById("Ex2Ej3B3lb");
var lb4 = document.getElementById("Ex2Ej3B4lb");
var labels = [lb1, lb2, lb3, lb4];

var bancoPreg =["¿En que año se creo c++?", 
                "¿Como se llama el creador de Python?",
                "¿Cual de los siguientes lenguajes es mas antiguo?",
                "¿Quien fue el creador de FORTRAN?",
                "¿En que año se creo Javascript?",
                "¿Que caracteres indican un bloque de codigo en c++?",
                "¿Cual de las siguientes palabras no sirve para imprimir a consola en c++?",
                "¿Que operador se usa para comprobar la igualdad de dos objetos en c++?",
                "¿Como se llama el metodo especial que se llama al crear un objeto?",
                "¿Cual de los siguientes no es un tipo de dato en c++?"];
var op1 =  ["1970",
            "John Python",
            "FORTRAN",
            "Robin Milner",
            "1980",
            "{}",
            "puts",
            "==",
            "Criador",
            "Entero"]
var op2 =  ["1979",
            "George Clooney",
            "Java",
            "Grace Hopper",
            "1985",
            "<>",
            "cout",
            "=",
            "Generador",
            "Flotante"]
var op3 =  ["1976",
            "Guido van Rossum",
            "C",
            "John Backus",
            "1990",
            "''",
            "write",
            "===",
            "Constructor",
            "Booleano"]
var op4 =  ["1981",
            "Bethoveen",
            "B",
            "John McCarthy",
            "1995",
            "[]",
            "printf",
            "equal",
            "Creador",
            "Vector"]
var opciones = [op1,op2,op3,op4];
var respuestas = [2,3,1,3,4,1,3,1,3,4]

var n = 0;
var puntaje = 0;

npreg.innerText = (n+1) + "/" + (bancoPreg.length);
pregunta.innerText = bancoPreg[n];
for(var i = 0; i < radioGroup.length; i++ ){
    labels[i].innerText = opciones[i][n];
}

function clic(){
    var val = 0;
    for(var i = 0; i < radioGroup.length; i++){
        if(radioGroup[i].checked){
            val = radioGroup[i].value;
            radioGroup[i].checked = false;
        }
    }
    if(n < bancoPreg.length){
        if(val != 0){
            if(val==respuestas[n]){
                puntaje++;
            }
            n++;
            if(n < bancoPreg.length){
                npreg.innerText = (n+1) + "/" + (bancoPreg.length);
                pregunta.innerText = bancoPreg[n];
                for(var i = 0; i < radioGroup.length; i++ ){
                    labels[i].innerText = opciones[i][n];
                }
            }
            else{
                npreg.innerText = "Felicidades";
                pregunta.innerText ="Sacaste: "+puntaje;
                boton.value = "Reiniciar";
                for(var i=0; i<radioGroup.length; i++){
                    radioGroup[i].style.display = 'none';
                }
                for(var i=0; i<labels.length;i++){
                    labels[i].style.display = 'none';
                }
            }
        }
    }
    else{
        n=0;
        puntaje = 0;
        npreg.innerText = (n+1) + "/" + (bancoPreg.length);
        pregunta.innerText = bancoPreg[n];
        for(var i = 0; i < radioGroup.length; i++ ){
            labels[i].innerText = opciones[i][n];
        }
        boton.value = "Next";
        for(var i=0; i<radioGroup.length; i++){
            radioGroup[i].style.display = '';
        }
        for(var i=0; i<labels.length;i++){
            labels[i].style.display = '';
        }
    }
    
}