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
import { IndexComponentR } from './result/index/index.component';
import { ViewComponentR } from './result/view/view.component';
import { NoAccessComponent } from './passtest/no-access/no-access.component';

import { AuthguardServiceService} from './authguard-service.service'
import {AuthenticationGuard} from './authentication.guard'; 

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
    IndexComponentP,
    IndexComponentR,
    ViewComponentR,
    NoAccessComponent
    
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
      { path: '', component: IndexComponentT ,canActivate:[AuthenticationGuard]},
      { path: 'question/:questionId', component: IndexComponentQ ,canActivate:[AuthenticationGuard]},
      { path: 'question/:questionId/index', component: IndexComponentQ ,canActivate:[AuthenticationGuard]},
      { path: 'question/:questionId/view', component: ViewComponentQ ,canActivate:[AuthenticationGuard]},
      { path: 'question/:questionId/create', component: CreateComponentQ ,canActivate:[AuthenticationGuard]},
      { path: 'question/:questionId/edit', component: EditComponentQ ,canActivate:[AuthenticationGuard]},
      { path: 'answer/:answerId', redirectTo: 'answer/:answerId/index', pathMatch: 'full'},
      { path: 'answer/:answerId/index', component: IndexComponentA ,canActivate:[AuthenticationGuard]},
      { path: 'answer/:answerId/view', component: ViewComponentA ,canActivate:[AuthenticationGuard]},
      { path: 'answer/:answerId/create', component: CreateComponentA ,canActivate:[AuthenticationGuard]},
      { path: 'answer/:answerId/edit', component: EditComponent ,canActivate:[AuthenticationGuard]},
      { path: 'passTest/:testId', component: IndexComponentP },
      { path: 'success', component: SuccessComponent },
      { path: 'noAccess', component: NoAccessComponent },
      { path: 'result', component: IndexComponentR ,canActivate:[AuthenticationGuard]},
      { path: 'result/:resultId/view', component: ViewComponentR ,canActivate:[AuthenticationGuard]},
      { path: '**', redirectTo: '/404', pathMatch: 'full'},
      { path: '', redirectTo: 'tests', pathMatch: 'full' },
    ])
  ],
  providers: [ 
    AuthguardServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }