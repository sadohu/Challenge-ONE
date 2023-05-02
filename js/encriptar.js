function limpiar(){
    document.querySelector("#msg").value = null;
}

function copiarMsg(){
    const res = document.querySelector("#result").value;
    navigator.clipboard.writeText(res);
    limpiar();
}

function accion(evento){
    //console.log(evento);
    let msg = "";
    let res = "";
    msg = document.querySelector("#msg").value;
    if(evento.target.id == "encriptar"){
        res = encriptador(msg);
    }else{
        res = desencriptador(msg);
    }
    document.querySelector("#result").value = res;
    limpiar();
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

encriptar.onclick = accion;
desencriptar.onclick = accion;
copiar.onclick = copiarMsg;

console.log(encriptar); 
console.log(desencriptar); 
console.log(copiar);

