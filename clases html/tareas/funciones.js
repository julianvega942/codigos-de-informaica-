//Función que recibe el radio de un círculo y devuelve su área

function areaCirc(radio){
    let area=Math.PI*(radio*radio);
    return(area);
}
let radio=2;
alert(`El área es ${areaCirc(radio)}`);

//Función que recibe el radio de una esfera y devuelve su volumen

function volEsfera(radio){
    let constante = 4/3
    let volumen= constante*Math.PI*(radio*radio*radio) 
    return(volumen)
}
let radio=2;
alert(`El área es ${volEsfera(radio)}`);

//Función que recibe 2 números y devuelve el mayor. No puede usar Math.max en este ejercicio.
function max(a,b){
    let mayor="";
    if (a>b) {
        mayor=a;
    }
    else {
        mayo=b
    }
    return(mayor);
    }
    let a=5
    let b= 4
    alert(`El número mayor es ${max(a,b)}`);

//Función que recibe 2 palabras y devuelve la más larga
function imprimirMasLarga(p1,p1){
   
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
        
    
    }
    let p1=prompt("Ingrese palabra 1");
    let p2=prompt("Ingrese la palabra 2");
    alert(`La palabra más larga es ${masLarga(p1,p2)}`);
        //Función que recibe 2 palabras e imprime en la consola la palabra más larga


        function imprimirMasLarga(p1,p1){
   
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
           //}xFunción que recibe un número y devuelve el enesimo numero de fibonacci

            function Fibonacci(n){
                let a=0;
                let b=1;
                
                let contador=0
                while( contador<n){
                    c=a+b;
                    a=b;
                    b=c;
                    contador=contador+1;
                }
                return(c)
                }
            let n=4
            alert(`La sucesión de Fibonacci es ${Fibonacci(n)}`);
            