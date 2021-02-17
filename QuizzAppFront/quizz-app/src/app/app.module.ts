import { ErrorHandlerService } from './shared/services/error-handler.service';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

 
import { AppComponent } from './app.component';

import { TestModule } from './test/test.module';
import { IndexComponentT } from './test/index/index.component';
import { IndexComponentQ } from './question/index/index.component';
import { ViewComponentQ } from './question/view/view.component';
import { EditComponentQ } from './question/edit/edit.component';
import { CreateComponentQ } from './question/create/create.component';
import { CommonModule } from '@angular/common';
import { CreateComponentA } from './answer/create/create.component';
import { IndexComponentA } from './answer/index/index.component';
import { ViewComponentA } from './answer/view/view.component';
import { EditComponent } from './answer/edit/edit.component';
import { IndexComponentP } from './passtest/index/index.component';
import { SuccessComponent } from './passtest/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponentQ,
    ViewComponentQ,
    EditComponentQ,
    CreateComponentQ,
    IndexComponentA,
    ViewComponentA,
    EditComponent,
    CreateComponentA,
    IndexComponentP
    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    HttpClientModule,
    //CommonModule, 
    BrowserModule,
    
    FormsModule,
    ReactiveFormsModule, 
    TestModule,
    RouterModule.forRoot([
      { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
      { path: '', component: IndexComponentT },
      { path: 'question/:questionId', component: IndexComponentQ },
      { path: 'question/:questionId/index', component: IndexComponentQ },
      { path: 'question/:questionId/view', component: ViewComponentQ },
      { path: 'question/:questionId/create', component: CreateComponentQ },
      { path: 'question/:questionId/edit', component: EditComponentQ },
      { path: 'answer/:answerId', redirectTo: 'answer/:answerId/index', pathMatch: 'full' },
      { path: 'answer/:answerId/index', component: IndexComponentA },
      { path: 'answer/:answerId/view', component: ViewComponentA },
      { path: 'answer/:answerId/create', component: CreateComponentA },
      { path: 'answer/:answerId/edit', component: EditComponent },
      { path: 'passTest/:testId', component: IndexComponentP },
      { path: 'success', component: SuccessComponent },
      { path: '**', redirectTo: '/404', pathMatch: 'full'},
      { path: '', redirectTo: 'tests', pathMatch: 'full' },
    ])
  ],
  providers: [ 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }