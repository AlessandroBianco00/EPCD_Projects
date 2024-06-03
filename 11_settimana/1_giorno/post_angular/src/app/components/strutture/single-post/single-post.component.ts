import { Component, Input } from '@angular/core';
import { iPost } from '../../../Models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

  @Input() post!:iPost

  show:boolean = false

  constructor(protected router:Router){}

  toggleForm() {
    this.show = !this.show
  }
}
