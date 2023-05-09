/* Funciones Principales */

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
        mostrarCuerpoResult(false);
        mensajeError(false);
    }else{
        mensajeError(true);
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


/* Funciones Secundarias */

function validarFormato(msg){
    let formato = /^[a-z\s]+$/;
    let arrayValido = msg.match(formato);
    if(arrayValido != null)
        return true;
    else
        return false;
}

function limpiar(){
    document.querySelector("#msg").value = null;
    document.querySelector("#result").value = null;
    mostrarCuerpoResult(true);
    mensajeError(false);
}

function copiarMsg(){
    const res = document.querySelector("#result").value;
    navigator.clipboard.writeText(res);
    limpiar();
}

function mostrarCuerpoResult(mostrar){
    if(mostrar == true){
        copiar.style.visibility = "hidden";
        imgMuñeco.style.visibility = "visible";
        resultMensaje.style.visibility = "visible";
        resultMensajeDesc.style.visibility = "visible";
    }else{
        copiar.style.visibility = "visible";
        imgMuñeco.style.visibility = "hidden";
        resultMensaje.style.visibility = "hidden";
        resultMensajeDesc.style.visibility = "hidden";
    }
}

function mensajeError(condicion){
    let error = document.querySelector("#lblError");
    if(condicion){
        let fntsz = window.getComputedStyle(error).fontSize;
        switch(fntsz){
            case "12px":{
                error.style.fontSize = "20px";
                error.style.color = "red";
                break;
            }
            case "20px":{
                error.style.textDecoration = "underline";
                break;
            }
        }
    }else{
        error.style.fontSize = "12px";
        error.style.color = "#495057";
        error.style.textDecoration = "none";
    }
}

/* Declaración de Variables */

let encriptar = document.querySelector("#encriptar");
let desencriptar = document.querySelector("#desencriptar");
let copiar = document.querySelector("#copiar");
let btnBorrar = document.querySelector("#borrar");
let imgMuñeco = document.querySelector("#muñeco");
let resultMensaje = document.querySelector(".result-mensaje");
let resultMensajeDesc = document.querySelector(".result-mensaje-descripcion");


/* Eventos de captura */

encriptar.onclick = accion;
desencriptar.onclick = accion;
copiar.onclick = copiarMsg;
btnBorrar.onclick = limpiar;