export class Calculadora{

  numero: number ;

  constructor(valor: number) {
    this.numero = valor;
    console.log('Iniciando Calculadora...')
  }

  sumar(){
    return this.numero + this.numero;
  }

  restar(){
    return this.numero- this.numero;
  }

  multiplicar(){
    return this.numero*this.numero;
  }



}

let calcA = new Calculadora(5);

console.log("El resultado de la suma es: "+calcA.sumar());
console.log("El resultado de la resta es: "+calcA.restar());
console.log("El resultado de la multiplicacion es: "+calcA.multiplicar());