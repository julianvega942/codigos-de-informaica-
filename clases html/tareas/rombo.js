let cantidad;
do {
    cantidad = parseFloat(prompt("Ingrese el cantidad"));
} while (isNaN(cantidad) || cantidad < 1);



let nLinea = 0;
while (nLinea < cantidad) {
  let linea = "";
  let nColumna = 0;
  while(nColumna<cantidad-nLinea){
    nColumna=nColumna+1;
    linea = linea + "&emsp;";

  }
  nColumna = 0;
  while (nColumna < cantidad) {
      
      nColumna=nColumna+1;
      linea = linea + "*";
  }
  linea=linea+"<br>";   
  document.write(linea);
  nLinea = nLinea + 1;
}


