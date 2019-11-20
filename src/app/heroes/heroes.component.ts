import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HEROES } from '../mock-heroes';

// @Component is a decorator function that specifies the 
// Angular metadata for the component.

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    console.log(this);
    console.log(hero)
    this.selectedHero = hero;
  }

  constructor() { }

  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. 
  // It's a good place to put initialization logic.
  ngOnInit() {
  }

}
