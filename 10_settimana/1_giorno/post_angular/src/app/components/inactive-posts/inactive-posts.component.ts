import { PostServiceService } from './../../services/post-service.service';
import { iPost } from './../../Models/post';
import { Component } from '@angular/core';


@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  everyPostArray:iPost[] = []
  inactivePostArray:iPost[] = []

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
    .then(() => this.inactivePostArray = this.PostSvc.getInactivePosts(this.everyPostArray))
    .then(() => console.log('filtrati', this.inactivePostArray))

  }
}
