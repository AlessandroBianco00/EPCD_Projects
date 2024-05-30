import { iPhoto } from './../Models/photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photoUrl:string = "https://jsonplaceholder.typicode.com/photos"

  arrayFavourite:iPhoto[] = []

  constructor(private http:HttpClient) { }

  getAllPhotos():Observable<iPhoto[]>{
    return this.http.get<iPhoto[]>(this.photoUrl)
  }

  toggleFavourite(pht:iPhoto) {
    if (this.arrayFavourite.find(photo => photo.id == pht.id)) {
      this.arrayFavourite = this.arrayFavourite.filter(photo => photo.id!= pht.id)
    } else {
      this.arrayFavourite.push(pht)
    }
  }
}
