import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { InfocomponentComponent } from './infocomponent/infocomponent.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';


//Servicios

import {LenguajesService} from './lenguajes.service';
import { LenguajesdetalleComponent } from './lenguajesdetalle/lenguajesdetalle.component';

const routes: Routes = [
  { path: 'informacion', component: InfocomponentComponent },
  { path: 'lenguajes', component: LenguajesComponent},
  { path: 'lenguajes/:id', component: LenguajesdetalleComponent},
  {path: '**', redirectTo: 'informacion', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    InfocomponentComponent,
    LenguajesComponent,
    LenguajesdetalleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LenguajesService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
