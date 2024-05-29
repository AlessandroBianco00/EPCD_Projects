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

  tagsArray:string[] = []

  filter!:string

  constructor(
    private PostSvc: PostServiceService
  ) {}

  postFilter(tagSearched:string) {
    console.log(tagSearched )
    this.allPostArray = this.PostSvc.arrayPostJson.filter(post =>
      post.tags[0] == tagSearched || post.tags[1] == tagSearched || post.tags[2] == tagSearched
    )
    this.filter = tagSearched
  }

  getArrayJson():void {
    this.allPostArray = this.PostSvc.arrayPostJson
  }

  ngOnInit() {
    this.allPostArray = this.PostSvc.arrayPostJson

    this.PostSvc.filterTags(this.tagsArray)
  }

}
