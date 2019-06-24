import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {
  show = true;
  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

}
