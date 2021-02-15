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
import { EditComponent } from './question/edit/edit.component';
import { CreateComponentQ } from './question/create/create.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponentQ,
    ViewComponentQ,
    EditComponent,
    CreateComponentQ
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
      { path: 'question/:questionId/edit', component: EditComponent },
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