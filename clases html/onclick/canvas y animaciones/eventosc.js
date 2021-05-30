let canvas = document.querySelector("#miCanvas")


let ctx = canvas.getContext("2d")

function dibujarPelota(xC, yC, r, color){
    
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color;
    
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
let x = 0;
let y = 200;
let r = 30;
let color = "red";

let vX = 10;
let dT = 30;

function moverYDibujar(){
    ctx.clearRect(0,0, 600, 400);
    let dX = dT/1000 *vX
    x = x + dX;
   
    dibujarPelota(x, y, r, color);
}

function arrancarOParar(){
    if (vX > 0){
        vX = 0;
    }
    else{
        vX = 10;
    }
}
window.setInterval(moverYDibujar, dT);

window.onkeyup = function(event){
    
 
    console.log(event.code);
    if (event.code == "Space")
    {
        arrancarOParar();
    }
   
}

function cambiarColorPelota(){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}
window.onclick = function(event){
    console.log(`Se hizo click en las coordenadas ${event.offsetX}, ${event.offsetY}`);
    console.log(`Las coordenadas de la pelota son ${x}, ${y}, y el radio es ${r}`)

    cambiarColorPelota();
}

function cambiarColorPelota(){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}
window.onclick = function(event){

    let distanciaX= event.offsetX 
    let distanciaY = event.offsetY
  distancia = Math.sqrt (Math.pow (distanciaX- x,2) + Math.pow (distanciaY - y,2))
    if (distancia <= r){

        cambiarColorPelota()

    }
    else {  vY = -vY }
}
