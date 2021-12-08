function validateUser(){
    if(document.getElementById("PracticasPassword").value == "1234"){
        window.location.replace("PracticasSi.html");
    }
    else{
        alert("Wrong Password");
    }
}