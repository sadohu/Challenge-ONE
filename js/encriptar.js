function limpiar(){
    document.querySelector("#msg").value = null;
}

function copiarMsg(){
    const res = document.querySelector("#result").value;
    navigator.clipboard.writeText(res);
    limpiar();
}

function validarFormato(msg){
    let formato = /^[a-z\s]+$/;
    let arrayValido = msg.match(formato);
    if(arrayValido != null)
        return true;
    else
        return false;
    /*Obtener la cadena hasta no encontrar una coincidencia
    var formato = /[a-z\s]+/g;
    var msg = "hola hugo pato HoLa";
    var array = msg.match(formato);
    console.log(array);
    console.log(array[0], array[2]);*/
}

function accion(evento){
    let msg = document.querySelector("#msg").value;
    let validacion = validarFormato(msg);
    if(validacion){
        let res = "";
        if(evento.target.id == "encriptar"){
            res = encriptador(msg);
        }else{
            res = desencriptador(msg);
        }
        document.querySelector("#result").value = res;
        limpiar();
    }else{
        console.log("Error formato erróneo");
        limpiar();
    }    
}

function encriptador(msg){
    let cad = "";
    for(let i = 0; i < msg.length; i++){
        let chr, modif = "";
        chr = msg[i];
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
        cad += modif;
    }
    return cad;
}

function desencriptador(msg){
    let cad = "";
    let i = 0;
    while(i < msg.length){
        let chr, modif = "";
        chr = msg[i];
        switch(chr){
            case "a":{
                let corte = msg.slice(i, i + 2);
                if(corte == "ai"){
                    modif = "a";
                    i += 2;
                }
                break;
            }
            case "e":{
                let corte = msg.slice(i, i + 5);
                if(corte == "enter"){
                    modif = "e";
                    i += 5;
                }
                break;
            }
            case "i":{
                let corte = msg.slice(i, i + 4);
                if(corte == "imes"){
                    modif = "i";
                    i += 4;
                }
                break;
            }
            case "o":{
                let corte = msg.slice(i, i + 4);
                if(corte == "ober"){
                    modif = "o";
                    i += 4;
                }
                break;
            }
            case "u":{
                let corte = msg.slice(i, i + 4);
                if(corte == "ufat"){
                    modif = "u";
                    i += 4;
                }
                break;
            }
            default:{
                modif = chr;
                i++;
                break;
            }
        }
        cad += modif;
    }
    return cad;
}



let encriptar = document.querySelector("#encriptar");
let desencriptar = document.querySelector("#desencriptar");
let copiar = document.querySelector("#copiar");
let btnBorrar = document.querySelector("#borrar");

encriptar.onclick = accion;
desencriptar.onclick = accion;
copiar.onclick = copiarMsg;
btnBorrar.onclick = limpiar;

console.log(encriptar); 
console.log(desencriptar); 
console.log(copiar);

