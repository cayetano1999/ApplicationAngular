import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocomponent',
  templateUrl: './infocomponent.component.html',
  styleUrls: ['./infocomponent.component.css']
})
export class InfocomponentComponent implements OnInit {

  data: any[];

  constructor() { }

  ngOnInit() {
    const result = [
      { key: 'Ingeniero', object: 'Josue Cayetano', value: 'Ingeniero en TICs'},
      { key: 'Arquitecto', object: 'Randi Ortiz', value: 'Arquitecto Industrial'},
      { key: 'Plomero', object: 'Alejando Amador', value: 'Plomero Ejecutivo'},
      { key: 'Busca Moro', object: 'Josermando Peralta', value: 'Espicificamente Motoconcho'}
    ];
    this.data = result;
  }

}
