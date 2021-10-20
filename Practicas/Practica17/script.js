var parrafos = document.getElementsByTagName("p");
//alert(parrafos[0].textContent);
//alert(parrafos.length);
document.getElementById("practice17P1").textContent = "Cambiado jaja";
for(var i=0; i<parrafos.length; i++){
    var enlaces = parrafos[i].getElementsByTagName("a");
    for(var j=0; j<enlaces.length; j++){
        console.log(enlaces[j].textContent);
    }
}