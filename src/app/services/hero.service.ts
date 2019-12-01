import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';

// We pass in our MessageService class to get is props and methods
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Observable<Hero[]> {
    
    this.messageService.add('HeroService: fetched heroes');

    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.

    console.log(of(HEROES))

    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) { }
}

// Why should we use services?

// Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on PRESENTING data and delegate data access to a service

// Services are a great way to share information among classes that don't know each other. We will create a MessageService and inject it in two places:

// 1. in HeroService which uses the service to send a message
// 2. in MessagesComponent which displays that message

// The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.

// Removing data access from components means you can change your mind about the implementation anytime, without touching any components. They don't know how the service works.




// Providers

// You must make the HeroService available to the dependency injection system before Angular can inject it into the HeroesComponent by registering a provider.

// In our case we have a registered provider with the root injector for our service by including provider metadata, that is providedIn: 'root' in the @Injectable() decorator.

//When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. 




// What are Observables?

//Observables are used in asyncronous operations
