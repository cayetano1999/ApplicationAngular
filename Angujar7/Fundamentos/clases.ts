class Calculadora {

     numero: number;

    constructor(valor: number) {
        
       this.numero = valor
       console.log(this.numero)
        
    }

    sumar(numero: number){

    return numero  + 10;  
    
    }



}

let Calc = new Calculadora(8);
console.log(Calc.sumar(10));