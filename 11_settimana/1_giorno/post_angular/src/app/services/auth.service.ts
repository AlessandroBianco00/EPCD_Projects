import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this.authSubject.asObservable()

  isLoggedIn:boolean = false

  constructor(private router:Router) { }

  login() {
    this.authSubject.next(true)
    this.isLoggedIn = true
  }

  logout() {
    this.authSubject.next(false)
    this.isLoggedIn = false
  }
}
