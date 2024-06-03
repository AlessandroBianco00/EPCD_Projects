import { PostServiceService } from './../../services/post-service.service';
import { iPost } from './../../Models/post';
import { Component } from '@angular/core';


@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {

  inactivePostArray:iPost[] = []

  constructor(
    private PostSvc:PostServiceService
  ) {}

  ngOnInit() {
    this.inactivePostArray = this.PostSvc.getInactivePosts(this.PostSvc.arrayPostJson)
    console.log('filtrati inattivi', this.inactivePostArray)
  }
}
