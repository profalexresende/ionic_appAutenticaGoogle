import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authService:AuthService,
              private router:Router) {}


  logout(){
    this.authService.logout().subscribe(
      ()=>{this.router.navigate(['login'])},
      err => console.log(err)
    )
  }
}
