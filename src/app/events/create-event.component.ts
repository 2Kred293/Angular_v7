import { importType } from "@angular/compiler/src/output/output_ast";

import {Component} from '@angular/core'
import { Router } from "@angular/router";
import { EventService } from "./shared";

@Component ({
    templateUrl: "create-event.component.html",
    //[routerLink] = "['/events']" adding this to the tag also works 
    styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class CreateEventComponent {
    newEvent
    isDirty:boolean = true
    constructor (private router: Router, private eventService: EventService) {
        


    }

    cancel(){
        this.router.navigate(['/events']) //this also works instead of router link
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events']) 

        
    }
}