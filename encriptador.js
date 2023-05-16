
function encriptar() {
    console.log("EJECUTANDO ENCRIPTAR");

    let texto    = document.getElementById("text").value;
    let titulo   = document.getElementById("titulo-text2");
    let parrafo  = document.getElementById("parrafo");
    let busqueda = document.getElementById("busqueda");

    let textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if (texto.length != 0){
        document.getElementById("text").value = textoEncriptado;
        titulo.textContent = "";
        parrafo.textContent = textoEncriptado;
        busqueda.src = "";
        toggleClass();
        
        
    }else{
        busqueda.src = "./img/busqueda.png";
        titulo.textContent = "Ningún mensaje fue encontrado"
        parrafo.textContent= "Ingresa el texto que deseas encriptar o desencriptar"
        alert("Debes ingresar un texto");
        requisitos();
    }
}

function requisitos(e) {
    document.getElementById("text").addEventListener("keypress", requisitos);

    if (texto.match(/^[a-z]{1,}$/) === null) {
        e.preventDefault();
    }
}


const btn = document.getElementById("button-copy");
const origin = document.getElementById("text");
const parrafo = document.getElementById("parrafo")

btn.addEventListener("click", () => {
    const texto = origin.value;
    console.log(texto);
    parrafo.innerHTML.select = texto;
    alert("Texto copiado");
})


function toggleClass(){
    let button = document.getElementById("copy");
    button.classList.toggle("display-none");
}

function desencriptar(){

    let texto    = document.getElementById("text").value;
    let titulo  = document.getElementById("titulo-text2");
    let parrafo  = document.getElementById("parrafo");
    let busqueda = document.getElementById("busqueda");

    let textoDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0){
        document.getElementById("text").value = textoDesencriptado;
        titulo.textContent = "";
        parrafo.textContent = textoDesencriptado;
        busqueda.src = "";
    }else{
        busqueda.src = "./img/muñeco.png";
        titulo.textContent = "Ningún mensaje fue encontrado"
        parrafo.textContent= "Ingresa el texto que deseas encriptar o desencriptar"
        alert("Debes ingresar un texto");
    }
}

document.getElementById("encriptar").addEventListener("click", encriptar);
document.getElementById("desencriptar").addEventListener("click", desencriptar);
document.getElementById("button-copy").addEventListener("click", toggleClass);


document.getElementById("text").addEventListener("input",function(e) {
        if(e.data && !e.data.match(/(^[a-z]|\s$)/)){
            let texto = e.target.value;
            alert("No puede ingresar mayusculas ni caracteres especiales");
            e.target.value = texto.substr(0, texto.length - 1);
            
        }
    }
);


// ([a-z]|\s)


//  Requisitos:

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// El resultado debe ser mostrado en la pantalla.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

// <!DOCTYPE html>
// <html>
// <body>

// <h1>The input pattern attribute</h1>

// <p>A form with a password field that must contain 8 or more characters:</p>

// <form action="/action_page.php">
//   <label for="pwd">Password:</label>
//   <input type="text" id="pwd" name="pwd" pattern="/^[a-z]$/" title="Eight or more characters">
//   <input type="submit">
// </form>

// </body>
// </html>
// https://joseluisochoag.github.io/Challenge-ONE-Sprint-01/