import {Routes} from '@angular/router'
import {EventsListComponent} from './events/events-list.component'
import {EventDetailsComponent} from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent}, // moved to the top so brower doesn't confuse with events/:id, only goes here if url shows new
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
    
    
]