import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // When the app starts, the browser's address bar points to the web site's root. That doesn't match any existing route so the router doesn't navigate anywhere. Here we automatically redirct it as the default start page
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  // The @NgModule metadata initializes the router and starts it listening for browser location changes.
  imports: [RouterModule.forRoot(routes)],
  //  AppRoutingModule exports RouterModule so it will be available throughout the app.
  exports: [RouterModule]
})
export class AppRoutingModule { }
