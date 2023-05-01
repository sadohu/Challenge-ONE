var msg = ""
var res = "";

function imprimir(){
    msg = document.querySelector("#msg").value;
    res = encriptador(msg);
    document.querySelector("#result").value = res;
    //limpiar();
}

function limpiar(){
    document.querySelector("#msg").value = null;
}

function encriptador(cad){
    var chr = "";
    var msg = "";
    for(var i = 0; i < cad.length; i++){
        chr = cad[i];
        console.log(chr);
        msg += chr;
    }
    return msg;
}

var encriptar = document.querySelector("#encriptar");
encriptar.onclick = imprimir;
console.log(encriptar); 

