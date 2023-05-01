var msg = ""
var res = "";

function imprimir(){
    msg = document.querySelector("#msg").value;
    res = encriptador(msg);
    console.log(res); 
    document.querySelector("#result").value = res;
    limpiar();
}

function limpiar(){
    document.querySelector("#msg").value = null;
}

function encriptador(cad){
    console.log(cad); 
    var chr, msg, modif = "";
    console.log(msg); 
    for(var i = 0; i < cad.length; i++){
        chr = cad[i];
        console.log(chr); 
        switch(chr){
            case "a":{
                modif = "ai";
                break;
            }
            case "e":{
                modif = "enter";
                break;
            }
            case "i":{
                modif = "imes";
                break;
            }
            case "o":{
                modif = "ober";
                break;
            }
            case "u":{
                modif = "ufat";
                break;
            }
            default:{
                modif = chr;
                break;
            }
        }
        if(i == 0){
            msg = modif;
        }else{
            msg += modif;
        }
    }
    return msg;
}

var encriptar = document.querySelector("#encriptar");
encriptar.onclick = imprimir;
console.log(encriptar); 

