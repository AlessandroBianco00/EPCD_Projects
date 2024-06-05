import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { iUser } from '../Models/users';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { iAuthResponse } from '../Models/auth-response';
import { iAuthData } from '../Models/auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService:JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<null|iUser>(null);

  user$ = this.authSubject.asObservable()

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  loginUrl = 'http://localhost:3000/login'
  registerUrl = 'http://localhost:3000/register'

  login(authData:iAuthData):Observable<iAuthResponse>{
    return this.http.post<iAuthResponse>(this.loginUrl, authData)
    .pipe(tap(data=>{

      this.authSubject.next(data.user)
      localStorage.setItem('accessData',JSON.stringify(data))

      this.autoLogout()

    }))
  }

  register(newUser:Partial<iUser>):Observable<iAuthResponse>{
    return this.http.post<iAuthResponse>(this.registerUrl,newUser)
  }

  logout():void{

    this.authSubject.next(null)
    localStorage.removeItem('accessData')

    this.router.navigate(['/auth/login'])

  }

  autoLogout() {

  }

  restoreUser() {

  }

  getAccessData() {

  }
}
