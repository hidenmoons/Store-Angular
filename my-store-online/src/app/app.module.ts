import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'
import { QuicklinkModule } from 'ngx-quicklink';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {TimeInterceptor} from './interceptors/time.interceptor'
import { TokenInterceptor } from './interceptors/token.interceptor';
import {QuicklinkModule} from 'ngx-quicklink';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QuicklinkModule
<<<<<<< HEAD
    
=======
>>>>>>> origin/master

  ],
  providers: [
    {provide :HTTP_INTERCEPTORS,useClass: TimeInterceptor, multi:  true},
    {provide :HTTP_INTERCEPTORS,useClass: TokenInterceptor, multi:  true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
