import { Component,OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl:"./profile.component.html",
})
export class ProfileComponent implements OnInit{
    profileForm: FormGroup
    constructor( private authService: AuthService, private router: Router){

    }
    
     ngOnInit() {
       let firstName =new FormControl(this.authService.currentUser.firstName)
       let lastName = new FormControl(this.authService.currentUser.lastName)
       this.profileForm = new FormGroup({
         firstName: firstName,
         lastName: lastName
       })

     }
     
     cancel() {
       this.router.navigate(['events'])
     }
     saveProfile(formValues) {
       this.authService.updateCurrentUSer(formValues.firstName, formValues.last)
        this.router.navigate(['events'])
     }
}