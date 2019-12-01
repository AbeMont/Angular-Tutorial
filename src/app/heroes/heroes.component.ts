import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HeroService } from '../services/hero.service';

// @Component is a decorator function that specifies the 
// Angular metadata for the component.

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // heroes will be an array with the object of Hero
  heroes: Hero[];

  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    // The new version waits for the Observable to emit the array of heroes—which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property. This asynchronous approach will work when the HeroService requests heroes from the server.
  }

  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. 
  // It's a good place to put initialization logic.
  ngOnInit() {
    this.getHeroes()
  }

  // When we click, onSelect will run. the parameter passed will contain the data types from Hero


}
