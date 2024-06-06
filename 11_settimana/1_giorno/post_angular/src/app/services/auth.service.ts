import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, tap } from 'rxjs';
import { iUser } from '../Models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { iAuthResponse } from '../Models/authresponse';
import { iAuthData } from '../Models/authdata';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<null|iUser>(null)
  user$ = this.authSubject.asObservable()

  syncIsLoggedIn:boolean = false;

  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user => this.syncIsLoggedIn = user)
  )

  constructor(
    private router:Router,
    private http:HttpClient
  ) { }

  loginUrl:string = 'http://localhost:3000/login'
  registerUrl:string = 'http://localhost:3000/register'

  register(newUser:Partial<iUser>) {
    return this.http.post<iAuthResponse>(this.registerUrl, newUser)
  }

  login(credentials:iAuthData) {
    return this.http.post<iAuthResponse>(this.loginUrl, credentials).pipe(tap(data => {
      this.authSubject.next(data.user)
      localStorage.setItem('currentUser', JSON.stringify(data))
    }))
  }

  logout():void {
    this.authSubject.next(null)
    localStorage.removeItem('currentUser')

    this.router.navigate(['/auth/login'])
  }


}
