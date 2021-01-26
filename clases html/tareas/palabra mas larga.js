function masLarga(p1,p2){
let largop1="";
let largop2="";
     largop1=p1.length;
     largop2=p2.length;
let palabraMaslarga="";
    if (largop1>largop2) {
        palabraMaslarga= p1;
    }
    else {
        palabraMaslarga=p2
    }
    return(palabraMaslarga)

}
let p1=prompt("Ingrese palabra 1");
let p2=prompt("Ingrese la palabra 2");
alert(`La palabra más larga es ${masLarga(p1,p2)}`);