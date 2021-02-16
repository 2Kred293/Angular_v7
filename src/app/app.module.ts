import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
  
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component'
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.components';
import {TOATSR_TOKEN, 
        Toastr, 
        CollapsibleWellComponent,
        JQ_TOKEN,
        SimpleModalComponent,
        ModalTriggerDirective } from './common/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


 let toastr:Toastr = window['toastr']
 let jQuery = window['$']

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers:
   [
      EventService, 
      EventRouteActivator,
      {provide: TOATSR_TOKEN, useValue: toastr},
      {provide: JQ_TOKEN, useValue: jQuery},
      AuthService,
      
      {
        provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState
      },
      EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(Component: CreateEventComponent) 
{ if (Component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
