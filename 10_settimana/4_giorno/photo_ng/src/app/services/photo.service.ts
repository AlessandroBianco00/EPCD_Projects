import { iPhoto } from './../Models/photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photoUrl:string = "https://jsonplaceholder.typicode.com/photos"

  arrayFavourite:iPhoto[] = []

  favouriteSubject = new Subject<iPhoto>()
  favourite$ = this.favouriteSubject.asObservable()

  constructor(private http:HttpClient) { }

  getAllPhotos():Observable<iPhoto[]>{
    return this.http.get<iPhoto[]>(this.photoUrl)
  }

  toggleFavourite(photo:iPhoto){
    this.favouriteSubject.next(photo)
  }
}
