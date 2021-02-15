import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswerRoutingModule } from './answer-routing.module';
import { IndexComponentA } from './index/index.component';
import { CreateComponentA } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponentA } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [IndexComponentA, CreateComponentA, EditComponent, ViewComponentA],
  imports: [
    CommonModule,
    AnswerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AnswerModule { }
