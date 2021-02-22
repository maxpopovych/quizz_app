import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponentT } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponentT } from './index/index.component';
import { ViewComponentT } from './view/view.component';

const routes: Routes = [
  { path: 'test', redirectTo: 'test/index', pathMatch: 'full'},
  { path: 'test/index', component: IndexComponentT },
  { path: 'test/:testId/view', component: ViewComponentT },
  { path: 'test/create', component: CreateComponentT },
  { path: 'test/:testId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
