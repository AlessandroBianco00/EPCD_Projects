import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { iPostVessel } from '../../Models/post-vessel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  urlJson:string = '../../../assets/db.json'

  arrayPost:iPost[] = []

  ngOnInit() {
    this.getPosts()
  }

  async getPosts():Promise<void>   {
    let response = await fetch(this.urlJson)
    let object = <iPostVessel> await response.json()

    this.arrayPost = object.posts
    console.log(this.arrayPost)
  }
}
