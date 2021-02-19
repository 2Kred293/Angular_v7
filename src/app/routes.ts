import {Routes} from '@angular/router'

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    EventResolver
  } from './events/index'
import { Error404Component } from './errors/404.components'

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']}, // moved to the top so brower doesn't confuse with events/:id, only goes here if url shows new
    {path: 'events', component: EventsListComponent, resolve : {events: EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    // event path set is referenced in other files using the router module or routerLink, this is an easier method compared to href
    {path: '404', component:Error404Component},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
]