import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  show:boolean = false
  isLogged:boolean = false

  constructor(private AuthSvc:AuthService) {}

  login(){
    this.AuthSvc.login()
    this.isLogged = true
  }

  logout() {
    this.AuthSvc.logout()
    this.isLogged = false

  }
}
