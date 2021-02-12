import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'test', redirectTo: 'test/index', pathMatch: 'full'},
  { path: 'test/index', component: IndexComponent },
  { path: 'test/:testId/view', component: ViewComponent },
  { path: 'test/create', component: CreateComponent },
  { path: 'test/:testId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
