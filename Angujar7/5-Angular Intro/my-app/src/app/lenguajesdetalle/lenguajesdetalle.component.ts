import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LenguajesService } from '../lenguajes.service';

@Component({
  selector: 'app-lenguajesdetalle',
  templateUrl: './lenguajesdetalle.component.html',
  styleUrls: ['./lenguajesdetalle.component.css']
})
export class LenguajesdetalleComponent implements OnInit {

  detalle = {};


  constructor(
    private ruta: ActivatedRoute,
    private Service: LenguajesService

  ) {
    this.ruta.params.subscribe(params => {

      this.detalle = this.Service.getLenguaje(params.id);
      console.log(this.Service.getLenguaje(params.id));


    });
  }

  ngOnInit() {
  }

}
