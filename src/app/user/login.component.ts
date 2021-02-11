import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    templateUrl:'./login.component.html'
})

export class LoginComponent{
    username
    password
    constructor (private router:Router){

    }

     login(formvalues) {
        console.log(formvalues)
        
    }

}