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
