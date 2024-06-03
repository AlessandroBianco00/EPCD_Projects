import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',//redireziona l'utente
    pathMatch: 'full'//per far si che il path vuoto venga riconosciuto correttamente
  },
  {
    path:'home',
    loadChildren: () => import("./components/home/home.module").then(m => m.HomeModule),//lazy load
    title:'Home'
  },
  {
    path:'active-posts',
    loadChildren: () => import("./components/active-posts/active-posts.module").then(m => m.ActivePostsModule),
    title:'Active-posts'
  },
  {
    path:'inactive-posts',
    loadChildren: () => import("./components/inactive-posts/inactive-posts.module").then(m => m.InactivePostsModule),
    title:'Inactive-posts',
    canActivate:[AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path:'all-posts',
    loadChildren: () => import("./components/all-posts/all-posts.module").then(m => m.AllPostsModule),
    title:'All-posts'
  },
  {
    path:'post-details/:id',
    loadChildren: () => import("./components/post-details/post-details.module").then(m => m.PostDetailsModule),
    title:'Post detail'
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
