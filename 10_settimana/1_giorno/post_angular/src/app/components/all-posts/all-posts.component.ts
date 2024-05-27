import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { PostServiceService } from '../../services/post-service.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.scss'
})
export class AllPostsComponent {

  allPostArray:iPost[] = []

  constructor(
    private PostSvc: PostServiceService
  ) {}

  ngOnInit() {
    this.allPostArray = this.PostSvc.arrayPostJson
  }

}
