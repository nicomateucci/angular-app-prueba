import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { MaestroComponent } from './maestro/maestro.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AlumnoComponent, MaestroComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
