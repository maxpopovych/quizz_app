import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestRoutingModule,
    FormsModule,
    HttpClientModule

  ]
})
export class TestModule { }