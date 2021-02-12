import { ErrorHandlerService } from './shared/services/error-handler.service';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

 
import { AppComponent } from './app.component';

import { TestModule } from './test/test.module';
import { IndexComponent } from './test/index/index.component';
/*
import { TestListComponent } from './components/test-list/test-list.component';
import { TestDetailsComponent } from './components/test-details/test-details.component';
import { TestCreateComponent } from './components/test-create/test-create.component';*/
   
@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    //CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    TestModule,
    RouterModule.forRoot([
      { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
      { path: '', component: IndexComponent },
      { path: '**', redirectTo: '/404', pathMatch: 'full'},
      { path: '', redirectTo: 'tests', pathMatch: 'full' }/*,
      { path: 'home', component: TestListComponent },
      { path: 'tests', component: TestListComponent },
      { path: 'tests/:id', component: TestDetailsComponent, loadChildren: () => import('./components/test.module').then(m => m.TestModule)},
      { path: 'create', component: TestCreateComponent , loadChildren: () => import('./components/test.module').then(m => m.TestModule)}
    */])
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