function encrypt(){
    let texto = document.getElementById("msj").value;
    let tituloMensaje = document.getElementById("title");
    let parrafo = document.getElementById("msj-result");
    let muneco = document.getElementById("nomsj")
    let copiarbtn = document.getElementById("copy-btn");
    let textoCifrado = texto
        
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    if (texto.length != 0){
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = textoCifrado;
        muneco.src = "/images/done.png";
        copiarbtn.style.visibility ="visible";
        copiarbtn.value = "Copiar";
    }else{
        muneco.src = "/images/encrypt.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        swal("error", "Debes ingresar un texto para encriptar", "warning");
        copiarbtn.style.visibility ="hidden";
    }
}

function decrypt(){
    let texto = document.getElementById("msj").value;
    let tituloMensaje = document.getElementById("title");
    let parrafo = document.getElementById("msj-result");
    let muneco = document.getElementById("nomsj");
    let copiarbtn = document.getElementById("copy-btn");
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    if (texto.length != 0){
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = textoCifrado;
        muneco.src = "/images/done.png";
        copiarbtn.style.visibility ="visible";
        copiarbtn.value = "Copiar";
    }else{
        muneco.src = "/images/encrypt.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        swal("error", "Debes ingresar un texto para desencriptar", "warning");
        copiarbtn.style.visibility ="hidden";
    }
}

function copy(){
    let resultado = document.getElementById("msj-result");
    let boton = document.getElementById("copy-btn")

    navigator.clipboard.writeText(resultado.textContent);
    boton.value = "Copiado";
}