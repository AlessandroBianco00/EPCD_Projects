import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SinglePostComponent } from '../components/strutture/single-post/single-post.component';



@NgModule({
  declarations: [
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[SinglePostComponent]
})
export class SharedModule { }
