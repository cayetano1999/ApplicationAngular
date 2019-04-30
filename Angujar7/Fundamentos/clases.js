"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(valor) {
        this.numero = valor;
        console.log(this.numero);
    }
    Calculadora.prototype.sumar = function (numero) {
        return numero + 10;
    };
    return Calculadora;
}());
var Calc = new Calculadora(8);
console.log(Calc.sumar(10));
