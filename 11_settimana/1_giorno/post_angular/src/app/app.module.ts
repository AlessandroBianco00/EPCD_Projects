import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { SinglePostComponent } from './components/strutture/single-post/single-post.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { FormsModule } from '@angular/forms';
import { TagColorDirective } from './direttive/tag-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    TagColorDirective,
    NavbarComponent,
    TagColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
