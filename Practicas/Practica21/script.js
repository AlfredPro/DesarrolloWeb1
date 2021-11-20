function setData(){
    localStorage.user = "user";
    localStorage.admin = "admin";
    localStorage.password = "123";
}
function validateUser(){
    setData();
    if(document.getElementById("Practice21Username").value == localStorage.user && document.getElementById("Practice21Password").value == localStorage.password){
        localStorage.userType = "user";
        window.location.replace("Practica21_Compras.html");
    }
    else if(document.getElementById("Practice21Username").value == localStorage.admin && document.getElementById("Practice21Password").value == localStorage.password){
        localStorage.userType = "admin";
        window.location.replace("Practica21_Compras.html");
    }
    else{
        alert("Not found");
    }
}