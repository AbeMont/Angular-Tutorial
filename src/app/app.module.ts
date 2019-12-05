import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// TO use [(ngModel)], we nedd to import FormsModule
import { FormsModule } from '@angular/forms';

// Our Root App Component
import { AppComponent } from './app.component';

// To use our new component, we must import HeroesComponent
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

//  Make HttpClient available everywhere in the app
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    // After importing HeroesComponent, we must include in declarations
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    // After importing FormsModule, we include it here
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests and returns simulated server responses. Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// An NgModule is defined by a class decorated with @NgModule(). The @NgModule() decorator is a function that takes a single metadata object, whose properties describe the module.

// declarations: The components, directives, and pipes that belong to this NgModule. ex. Components we create

// imports: Other modules whose exported classes are needed by component templates declared in this NgModule.

// providers: Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)

// bootstrap: The main application view, called the root component, which hosts all other app views. Only the root NgModule should set the bootstrap property.

 