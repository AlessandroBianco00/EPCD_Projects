import { PostDetailsComponent } from './components/post-details/post-details.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',//redireziona l'utente
    pathMatch: 'full'//per far si che il path vuoto venga riconosciuto correttamente
  },
  {
    path:'home',
    component: HomeComponent,
    title:'Home'
  },
  {
    path:'active-posts',
    component: ActivePostsComponent,
    title:'Active Posts'
  },
  {
    path:'inactive-posts',
    component: InactivePostsComponent,
    title:'Inactive Posts'
  },
  {
    path:'post-details/:id',
    component: PostDetailsComponent
  },
  /*{
    path:'**',//pagina 404
    component: Page404Component
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
