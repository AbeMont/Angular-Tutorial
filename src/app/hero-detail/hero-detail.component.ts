import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// the router creates the HeroDetailComponent in response to a URL such as ~/detail/11. The HeroDetailComponent needs a new way to obtain the hero-to-display

// 1. Get the route that created it
// 2. Extract the id from the route
// 3. Acquire the hero with that id from the server via the HeroService

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() decorates the property heroProp, which has a type of object, however, @Input() properties can have any type, such as number, string, boolean, or object. The value for item will come from the parent component,

  heroProp: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // The route.snapshot is a static image of the route information shortly after the component was created.
    // The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
    // Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
    this.heroService.getHero(id)
      .subscribe(hero => this.heroProp = hero);
  }
  
  // goBack() method component class that navigates backward one step in the browser's history stack using the Location service that you injected previously.
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.heroProp)
      .subscribe(() => this.goBack());
  }

}

  //@Input() and @Output() allow Angular to share data between the parent context and child directives or components. An @Input() property is writable while an @Output() property is observable.
