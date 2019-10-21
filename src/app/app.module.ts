import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { MaestroComponent } from './maestro/maestro.component';
import { CounterComponent } from './counter/counter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoService} from './todo.service';
import {HttpClientModule} from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import {MovieService} from './movies/movie.service';
import { Counter2Component } from './counter2/counter2.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleRowComponent } from './article-row/article-row.component';
import { LoginComponent } from './login/login.component';
import { PrimerPaginaComponent } from './primer-pagina/primer-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import {PrimerPaginaResolver} from './primer-pagina/primer-pagina.resolve';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    AlumnoComponent, 
    MaestroComponent,
    CounterComponent,
    TodoListComponent,
    TodoAppComponent,
    MoviesComponent,
    Counter2Component,
    ArticleListComponent,
    ArticleRowComponent,
    LoginComponent,
    PrimerPaginaComponent,
    SegundaPaginaComponent,
    NavegacionComponent ],
  providers: [TodoService, MovieService, PrimerPaginaResolver],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
