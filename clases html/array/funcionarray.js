function promedio(arraynotas){
    let cantidadNotas;
    do {
    cantidadNotas = parseFloat(prompt("Ingrese cantidad de  notas"))
    } while (isNaN(cantidadNotas) ||  cantidadNotas < 1);

    let i=0;
 while(i<cantidadNotas){
    let notas = parseFloat(prompt("Ingrese  notas"))
    if (notas <=10 && notas >=0 ) {
        i=i+1;
        arraynotas.push(notas);
    }
 }
 let long=0;
 long=arraynotas.length;
 let j=0;
 let suma=0;
 while(j<long){
    suma=suma+arraynotas[j];
    j=j+1;
 } 
 let promedio=0;
 promedio= suma/long;
 return(promedio)
}
let  arraynotas=[];
alert(`El promedio es ${promedio(arraynotas)}`);
