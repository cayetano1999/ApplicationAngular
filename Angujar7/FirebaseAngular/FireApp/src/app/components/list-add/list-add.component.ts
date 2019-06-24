import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {

  item: any = {
    name: ''
  };

  constructor(private servicio: ConexionService) { 

  }

  ngOnInit() {
  }

  agregar() {
    this.servicio.addItem(this.item);
    this.item.name = '';
  }

}
