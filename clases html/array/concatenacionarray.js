let cantidadPalabras;
    do {
    cantidadPalabras = parseFloat(prompt("Ingrese cantidad de  palabras"))
    } while (isNaN(cantidadPalabras) ||  cantidadPalabras < 1);
    let  arraypalabras=[];
    let i=0;
while(i<cantidadPalabras){
    let Palabra = prompt("Ingrese la palabra")
        i=i+1;
        arraypalabras.push(Palabra);   
}
let long=0;
long=arraypalabras.length;
let j=0;
let concatenar="";
while(j<long){
   concatenar+=arraypalabras[j] + " ";
   j=j+1;
}
alert(`La palabra ${concatenar}`);



