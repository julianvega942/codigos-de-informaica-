let boton = document.querySelector("#color")
let parrafo = document.querySelector("#Parrafo1")
boton.onclick = cambiarColor
function cambiarColor(){
 
// math.floor sacado de https://www.w3schools.com/js/js_random.asp
        let a = Math.floor(Math.random() * 226)
        let b = Math.floor(Math.random() * 226)
        let c = Math.floor(Math.random() * 226)
        parrafo.style.color = `rgb(${a},${b},${c})`;
}

