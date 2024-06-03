import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { iPostVessel } from '../../Models/post-vessel';
import { PostServiceService } from '../../services/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  urlJson:string = '../../../assets/db.json'

  arrayPost:iPost[] = []
  dailyPost:iPost[] = []
  arrayEstrazione:iPost[] =[]

  constructor(
    private PostSvc: PostServiceService
  ) {}

  ngOnInit() {
    this.arrayPost = this.PostSvc.arrayPostJson
    this.PostSvc.getRandomPosts( this.dailyPost, this.arrayEstrazione, 4)
  }

}
