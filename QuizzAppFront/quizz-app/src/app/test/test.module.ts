import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { IndexComponentT } from './index/index.component';
import { ViewComponentT } from './view/view.component';
import { CreateComponentT } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [IndexComponentT, ViewComponentT, CreateComponentT, EditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class TestModule { }
