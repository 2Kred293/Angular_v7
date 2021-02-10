import { importType } from "@angular/compiler/src/output/output_ast";

import {Component} from '@angular/core'
import { Router } from "@angular/router";

@Component ({
    template: `
    <h1> New Events </h1>
    <hr>
    <div class = "col-md-6">
        <h3> [Create Event form will go here] </h3>
        <br/>
        <br/>
        <button type="submit" class = "btn btn-primary"> Save </button>
        <button type="button" class = "btn btn-default" (click) = "cancel()"> Cancel </button>` //[routerLink] = "['/events']" adding this to the tag also works 
})

export class CreateEventComponent {
    constructor (private router: Router){

    }

    cancel(){
        this.router.navigate(['/events']) //this also works instead of router link
    }
}