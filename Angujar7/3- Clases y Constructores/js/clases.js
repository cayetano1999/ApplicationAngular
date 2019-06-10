"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculadora = /** @class */ (function () {
    function Calculadora(valor) {
        this.numero = valor;
        console.log('Iniciando Calculadora...');
    }
    Calculadora.prototype.sumar = function () {
        return this.numero + this.numero;
    };
    Calculadora.prototype.restar = function () {
        return this.numero - this.numero;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.numero * this.numero;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
var calcA = new Calculadora(5);
console.log("El resultado de la suma es: " + calcA.sumar());
console.log("El resultado de la resta es: " + calcA.restar());
console.log("El resultado de la multiplicacion es: " + calcA.multiplicar());
