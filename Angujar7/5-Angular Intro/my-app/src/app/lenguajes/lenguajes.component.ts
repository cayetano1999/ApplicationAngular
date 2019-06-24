import { Component, OnInit } from '@angular/core';
import { LenguajesService } from '../lenguajes.service';
@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css']
})
export class LenguajesComponent implements OnInit {

  data: any[];


  constructor(private _service: LenguajesService) {
    this.data = _service.getData();
  }

  ngOnInit() {

  }

}
