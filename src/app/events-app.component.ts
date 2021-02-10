import { style } from '@angular/animations';
import { Component } from '@angular/core'
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `
  

  
})
export class EventsAppComponent {
  title = 'app';
}
