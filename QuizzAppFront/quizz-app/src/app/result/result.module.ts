import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [IndexComponent, ViewComponent],
  imports: [
    CommonModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
