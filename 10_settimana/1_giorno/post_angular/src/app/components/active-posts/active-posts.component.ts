import { PostServiceService } from './../../services/post-service.service';
import { iPost } from './../../Models/post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {

  activePostArray:iPost[] = []

  constructor(
    private PostSvc:PostServiceService
  ) {}

  ngOnInit() {
    this.activePostArray = this.PostSvc.getActivePosts(this.PostSvc.arrayPostJson)
    console.log('filtrati', this.activePostArray)

  }
}
