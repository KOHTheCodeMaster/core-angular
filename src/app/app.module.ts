import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Comp1Component} from './basic-principles/comp1/comp1.component';
import {BindingComponent} from './basic-principles/binding/binding.component';
import {FormsModule} from "@angular/forms";
import {BasicPrinciplesComponent} from './basic-principles/basic-principles.component';
import {DataBindingDiveComponent} from './data-binding-dive/data-binding-dive.component';
import {MovieManagerComponent} from './data-binding-dive/movie-manager/movie-manager.component';
import {MovieComponent} from './data-binding-dive/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    BindingComponent,
    BasicPrinciplesComponent,
    DataBindingDiveComponent,
    MovieManagerComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
