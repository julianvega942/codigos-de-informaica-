let ancho;
let alto;
do {
  ancho = parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(ancho) || ancho < 1);

do {
  alto = parseFloat(prompt("Ingrese el alto"));
} while (isNaN(alto) || alto < 1);

let nLinea = 0;
while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
    if (nLinea == nColumna) {
      linea = linea + " ";
    } else {
      linea = linea + "*";
    }
    nColumna = nColumna + 1;
  } 
  
  console.log(linea);
  nLinea = nLinea + 1;
}
