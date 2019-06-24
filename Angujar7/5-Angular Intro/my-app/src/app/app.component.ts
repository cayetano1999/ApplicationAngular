import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular Application';
  framework = 'Angular';
  data: any[];
  observable: Subject<any[]>;
  show = true;
  ngOnInit(){
    const result = [
      { key: 'Ingeniero', object: 'Josue Cayetano', value: 'Ingeniero en TICs'},
      { key: 'Arquitecto', object: 'Randi Ortiz', value: 'Arquitecto Industrial'},
      { key: 'Plomero', object: 'Alejando Amador', value: 'Plomero Ejecutivo'},
      { key: 'Busca Moro', object: 'Josermando Peralta', value: 'Espicificamente Motoconcho'}
    ];
    

    this.data = result;

  }
}
