var radiob = document.getElementsByName("fav_language");
//alert(radiob.length);
for(var i=0; i<radiob.length; i++){
    if(radiob[i].checked){
        alert(radiob[i].value);
    }
}