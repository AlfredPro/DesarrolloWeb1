//alert(document.getElementById('practice16Header1').textContent);
//document.getElementById('practice16P1').textContent="Bla bla";
function llenarLista(){
    frutas = ["Manzana", "Pera", "Platano", "Guayaba", "Sandia", "Naranja", "Tuna", "Frambuesa", "Zarzamora", "Morazul"];
    for (let i = 0; i < frutas.length; i++){
        document.getElementById('practice16Li'+i).textContent = frutas[i];
    }
}