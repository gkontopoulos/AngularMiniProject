import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpDataService } from './simple-http/http-data.service';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { BrsComponent } from './BugReportingSystem/brs.component';
import { BrsService } from './BugReportingSystem/brs.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    BrsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpDataService, BrsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
