var inp = document.getElementById("Ex2Ej2Input");
var list = document.getElementById("Ex2Ej2Lista");

inp.addEventListener("keyup", function(event) {
    if (event.code == 'Enter') {
        var texto = inp.value;
        if(texto != ""){
            inp.value = "";
            var entry = document.createElement('li');
            entry.appendChild(document.createTextNode(texto));
            entry.onmousedown = function(event) { 
                if(event.button == 0){
                    var t = entry.textContent;
                    var str = t.strike();
                    entry.innerHTML = str;
                }
                if(event.button == 2){
                    list.removeChild(entry);
                }
            };
            list.appendChild(entry);
        }
    }
  });
  window.addEventListener('contextmenu', function (e) { 
    // do something here... 
    e.preventDefault(); 
  }, false);