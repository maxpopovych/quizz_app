import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasstestRoutingModule } from './passtest-routing.module';
import { IndexComponentP } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { NoAccessComponent } from './no-access/no-access.component';


@NgModule({
  declarations: [IndexComponentP, SuccessComponent, NoAccessComponent],
  imports: [
    CommonModule,
    PasstestRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PasstestModule { }
