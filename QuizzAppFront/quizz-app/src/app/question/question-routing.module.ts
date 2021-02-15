import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponentQ } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponentQ } from './index/index.component';
import { ViewComponentQ } from './view/view.component';

const routes: Routes = [
  { path: 'question/:questionId', redirectTo: 'question/:questionId/index', pathMatch: 'full' },
  { path: 'question/:questionId/index', component: IndexComponentQ },
  { path: 'question/:questionId/view', component: ViewComponentQ },
  { path: 'question/:questionId/create', component: CreateComponentQ },
  { path: 'question/:questionId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
