import { PhotoService } from './../../services/photo.service';
import { iPhoto } from './../../Models/photo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  photosArray:iPhoto[] =[]

  arrayFavourite:iPhoto[] =[]

  constructor(private PhotoSvc:PhotoService) {}



  ngOnInit(){
    this.arrayFavourite = this.PhotoSvc.arrayFavourite

    this.PhotoSvc.getAllPhotos().subscribe(photos => {
      photos.forEach(photo => {if(this.photosArray.length < 100) {
        this.photosArray.push(photo)
      }})
    })

  }

  toggleFavourite(photo:iPhoto){
    this.PhotoSvc.toggleFavourite(photo)
    this.arrayFavourite = this.PhotoSvc.arrayFavourite
  }

  removeFromHome(pht:iPhoto) {
    this.photosArray = this.photosArray.filter(photo => photo.id!= pht.id)
  }
}
