//constantes

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn-success");
const encripta = document.querySelector(".btn-primary");
const desencripta = document.querySelector(".btn-secondary");

/*Llaves de encriptacion
e -> "enter"`
i -> "imes"`
a -> "ai"`
o -> "ober"`
u -> "ufat"`
*/ 

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

//seteo
mensaje.value = "";
copia.style.display = "none"

//Seccion de Eventos

encripta.addEventListener("click", BotonEncriptar);
desencripta.addEventListener("click", BotonDesencriptar);
copia.addEventListener("click", copiar);

// Funciones

function validarTexto(){
    let textoEscrito = textArea.value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function BotonEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "inline-block"
    }
}




function encriptar(stringEncriptada){

    stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada
}



function BotonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function desencriptar(stringDesencriptada){
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}