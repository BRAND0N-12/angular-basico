import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//crear un modulo llamado contadorModule

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroe/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
