import {Routes} from '@angular/router'
import {EventsListComponent} from './events/events-list.component'
import {EventDetailsComponent} from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.components'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']}, // moved to the top so brower doesn't confuse with events/:id, only goes here if url shows new
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    // event path set is referenced in other files using the router module or routerLink, this is an easier method compared to href
    {path: '404', component:Error404Component}
]