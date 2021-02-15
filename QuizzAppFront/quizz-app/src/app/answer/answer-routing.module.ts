import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponentA } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponentA } from './index/index.component';
import { ViewComponentA } from './view/view.component';

const routes: Routes = [
  { path: 'answer/:answerId', redirectTo: 'answer/:answerId/index', pathMatch: 'full' },
  { path: 'answer/:answerId/index', component: IndexComponentA },
  { path: 'answer/:answerId/view', component: ViewComponentA },
  { path: 'answer/:answerId/create', component: CreateComponentA },
  { path: 'answer/:answerId/edit', component: EditComponent } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerRoutingModule { }
