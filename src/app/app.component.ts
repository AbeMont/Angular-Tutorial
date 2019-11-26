// This file creates the root component of our Application called 'AppComponent'

import { Component } from '@angular/core';

// @Component is a decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}

// selector: The CSS selector that identifies this directive in a template and triggers instantiation of the directive. This creates <app-root>
// templateUrl: The relative path or absolute URL of a template file for an Angular component.
// styleUrls: One or more relative paths or absolute URLs for files containing CSS stylesheets