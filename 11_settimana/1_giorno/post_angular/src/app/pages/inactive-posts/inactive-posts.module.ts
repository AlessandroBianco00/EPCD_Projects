import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactivePostsComponent } from './inactive-posts.component';
import { InactivePostsRoutingModule } from './inactive-posts-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    InactivePostsComponent
  ],
  imports: [
    CommonModule,
    InactivePostsRoutingModule,
    SharedModule
  ]
})
export class InactivePostsModule { }
