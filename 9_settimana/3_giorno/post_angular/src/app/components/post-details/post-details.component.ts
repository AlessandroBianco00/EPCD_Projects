import { PostServiceService } from './../../services/post-service.service';
import { iPost } from './../../Models/post';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {

  currentPost!:iPost
  everyPostArray:iPost[] = []

  constructor(
    private route:ActivatedRoute,
    private PostSvc:PostServiceService
  ) {}

  ngOnInit() {

    this.PostSvc.getFromJson()
    .then(res => res.json())
    .then(res => {
      this.everyPostArray = res.posts
    })
    //Ricerca con id
    .then(() => {
      this.route.params.subscribe((params:any) => {

        console.log(params);

        let postFound = this.PostSvc.getPostById(params.id, this.everyPostArray)

        console.log(postFound);


        if(postFound){
          this.currentPost = postFound
        }
    })
    })
}
}
