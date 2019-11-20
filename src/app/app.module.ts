import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// TO use [(ngModel)], we nedd to import FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// To use our new component, we must import HeroesComponent
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    // After importing HeroesComponent, we must include in declarations
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    // After importing FormsModule, we include it here
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
