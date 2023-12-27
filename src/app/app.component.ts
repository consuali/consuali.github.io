import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'cf-website-angular';
  showNavigation: boolean;

  constructor(location: Location, router: Router) {
    particlesJS.load('particles-js', '../assets/particles.json', null);

    router.events.subscribe(() => {
      this.showNavigation = location.path() !== '';
    });
  }

}
