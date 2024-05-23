import { PostServiceService } from './../../services/post-service.service';
import { iPost } from './../../Models/post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {

  everyPostArray:iPost[] = []
  activePostArray:iPost[] = []

  constructor(
    private PostSvc:PostServiceService
  ) {}

  ngOnInit() {

    this.PostSvc.getFromJson()
    .then(res => res.json())
    .then(res => {
      this.everyPostArray = res.posts
    })
    .then(() => console.log(this.everyPostArray))
    .then(() => this.activePostArray = this.PostSvc.getActivePosts(this.everyPostArray))
    .then(() => console.log('filtrati', this.activePostArray))

  }
}
