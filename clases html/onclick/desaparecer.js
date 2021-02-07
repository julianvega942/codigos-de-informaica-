let boton2 = document.querySelector("#desaparecer")
let parrafo2 = document.querySelector("#Parrafo2")
boton2.onclick = desaparecer
function desaparecer(){
    if (parrafo2.innerHTML == "")
    {
    parrafo2.innerHTML = "según los filosofos la física es imposible"
 
}
else {
    parrafo2.innerHTML = ""
}
}

parrafo2.innerHTML = "según los filosofos la física es imposible"