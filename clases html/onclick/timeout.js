// querySelector sirve para hacer referencia desde JS
// a los elementos de html
let boton2 = document.querySelector("#ocultar")
let parrafo3 = document.querySelector("#parrafo3")
// onclick es un evento que ocurrecuando el usario hace click sobre un elemento, en este caso sobre el botón
boton2.onclick = ocultar 

// los paréntesis () indican que la función no necesita ningún argumento para funcionar.
function ocultar(){
    // cambio el color a azul y luego de 3 segundos
    // lo cambio a negro
    parrafo3.style.display = "none"
    setTimeout(aparecer, 3000);
}
function aparecer(){
    // lo cambio a negro
    parrafo3.style.display = "block"
}