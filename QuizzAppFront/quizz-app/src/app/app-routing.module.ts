import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestListComponent } from './components/test-list/test-list.component';
import { TestDetailsComponent } from './components/test-details/test-details.component';
import { TestCreateComponent } from './components/test-create/test-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'tests', pathMatch: 'full' },
  { path: 'tests', component: TestListComponent },
  { path: 'tests/:id', component: TestDetailsComponent },
  { path: 'create', component: TestCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
