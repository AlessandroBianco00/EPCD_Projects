import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePostsComponent } from './active-posts.component';
import { ActivePostsRoutingModule } from './active-posts-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ActivePostsComponent
  ],
  imports: [
    CommonModule,
    ActivePostsRoutingModule,
    SharedModule
  ]
})
export class ActivePostsModule { }
