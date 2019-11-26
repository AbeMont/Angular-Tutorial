import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() decorates the property heroProp, which has a type of object, however, @Input() properties can have any type, such as number, string, boolean, or object. The value for item will come from the parent component,
  @Input() heroProp: Hero;

  constructor() { }

  ngOnInit() {
  }

}

  //@Input() and @Output() allow Angular to share data between the parent context and child directives or components. An @Input() property is writable while an @Output() property is observable.
