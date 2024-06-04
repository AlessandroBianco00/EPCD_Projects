import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './pages/template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path:'',
    component: ReactiveFormComponent,
    title: 'Reactive form',
    pathMatch: 'full'
  },
  {
    path:'template-driven',
    component: TemplateDrivenFormComponent,
    title:'Template Driven'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
