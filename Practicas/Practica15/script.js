var num1;
var num2;
var letra;
function pedir_datos(){
    num1 = prompt("Ingresa un numero:");
    num2 = prompt("Ingresa otro numero:");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
}
function suma_y_muestra(){
    res = num1+num2;
    alert("El resultado es: "+res);
}
function suma_y_muestra_p(n1, n2){
    res = parseInt(n1) + parseInt(n2);
    alert("El resultado es: "+res);
}
function dame_letra(){
    letra = prompt("Dame una letra: ");
}
function es_vocal(){
    switch(letra){
        case 'a':
            alert("Es vocal");
            break;
        case 'A':
            alert("Es vocal");
            break;
        case 'e':
            alert("Es vocal");
            break;
        case 'E':
            alert("Es vocal");
            break;
        case 'i':
            alert("Es vocal");
            break;
        case 'I':
            alert("Es vocal");
            break;
        case 'o':
            alert("Es vocal");
            break;
        case 'O':
            alert("Es vocal");
            break;
        case 'u':
            alert("Es vocal");
            break;
        case 'U':
            alert("Es vocal");
            break;
        default:
            alert("No es vocal");
            break;
    }
}