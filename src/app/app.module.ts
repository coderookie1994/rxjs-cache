import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { RightsService } from "src/app/rights.service";
import { LocalStorageService } from "src/app/localStorage.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    HttpClientModule
  ],
  providers: [RightsService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
