import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  data: any[] = [
    { nombre: 'C-Sharp', empresa: 'Microsoft', applicaciones: 'Web, Movil, Desktop', descripcion: 'Lenguaje de Programacion' },
    { nombre: 'C++', empresa: 'Laboratorios Bell', applicaciones: 'Desktop', descripcion: 'Lenguaje de Programacion' },
    { nombre: 'Java Script', empresa: 'Netscape', applicaciones: 'Web', descripcion: 'Lenguaje de Programacion' },
    { nombre: 'Java', empresa: 'Oracle', applicaciones: 'Web, Movil, Desktop', descripcion: 'Lenguaje de Programacion' }

  ];



  detalle: {
    descripcion: string,
    imagen: string,
  };


  constructor() {
  }

  getData() {
    return this.data;
  }

  getLenguaje(nombre) {

    if (nombre === 'C-Sharp') {
      this.detalle =  {
// tslint:disable-next-line: max-line-length
        descripcion: 'C# (pronunciado si sharp en inglés) es un lenguaje de programación orientado a objetos desarrollado y estandarizado por Microsoft como parte de su plataforma .NET, que después fue aprobado como un estándar por la ECMA (ECMA-334) e ISO (ISO/IEC 23270). C# es uno de los lenguajes de programación diseñados para la infraestructura de lenguaje común. Su sintaxis básica deriva de C/C++ y utiliza el modelo de objetos de la plataforma .NET, similar al de Java, aunque incluye mejoras derivadas de otros lenguajes.',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png'
      };

    } else if (nombre === 'C++') {
      this.detalle = {
        // tslint:disable-next-line:max-line-length
        descripcion : 'C++ es un lenguaje de programación diseñado en 1979 por Bjarne Stroustrup. La intención de su creación fue extender al lenguaje de programación C mecanismos que permiten la manipulación de objetos. En ese sentido, desde el punto de vista de los lenguajes orientados a objetos, el C++ es un lenguaje híbrido. Posteriormente se añadieron facilidades de programación genérica, que se sumaron a los paradigmas de programación estructurada y programación orientada a objetos. Por esto se suele decir que el C++ es un lenguaje de programación multiparadigma.',
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png'
      };
    } else if (nombre === 'Java Script') {
      this.detalle = {
        // tslint:disable-next-line:max-line-length
        descripcion : 'JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,3​ basado en prototipos, imperativo, débilmente tipado y dinámico. Se utiliza principalmente en su forma del lado del cliente (client-side), implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas4​ aunque existe una forma de JavaScript del lado del servidor (Server-side JavaScript o SSJS). Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es también significativo.',
// tslint:disable-next-line: max-line-length
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png'
      };
    } else if (nombre === 'Java') {
      this.detalle = {
        // tslint:disable-next-line:max-line-length
        descripcion : 'Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos, que fue diseñado específicamente para tener tan pocas dependencias de implementación como fuera posible. Su intención es permitir que los desarrolladores de aplicaciones escriban el programa una vez y lo ejecuten en cualquier dispositivo (conocido en inglés como WORA, o "write once, run anywhere"), lo que quiere decir que el código que es ejecutado en una plataforma no tiene que ser recompilado para correr en otra. Java es, a partir de 2012, uno de los lenguajes de programación más populares en uso, particularmente para aplicaciones de cliente-servidor de web, con unos diez millones de usuarios reportados.',
// tslint:disable-next-line: max-line-length
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/d/de/%D0%9B%D0%BE%D0%B3%D0%BE_%D0%B6%D0%B0%D0%B2%D0%B0.png'
      };
    } else {
        this.detalle = {
          descripcion: 'No hay descripcion para ' + nombre + ' ',
          imagen: null,
        };
    }


    return this.detalle;

  }
}
