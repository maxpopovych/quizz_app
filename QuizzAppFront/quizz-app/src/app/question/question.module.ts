import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { IndexComponentQ } from './index/index.component';
import { ViewComponentQ } from './view/view.component';
import { CreateComponentQ } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [IndexComponentQ, ViewComponentQ, CreateComponentQ, EditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuestionRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
  
})
export class QuestionModule { }
