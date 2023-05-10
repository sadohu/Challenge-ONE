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
    let listEncriptacion = {a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat"};
    let formato = /([aeiou])/g;
    let cad = msg.replace(formato, (match, p1) => {
        return listEncriptacion[p1];
    });
    return cad;
}

function desencriptador(msg){
    let listDesencriptacion = {ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u"};
    let formato = /(ai|enter|imes|ober|ufat)/g;
    let cad = msg.replace(formato, (match, p1) => {
        return listDesencriptacion[p1];
    });
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