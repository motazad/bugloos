import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainTemplateComponent } from './template/main-template/main-template.component';
import {AppComponent} from "./app.component";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    MainTemplateComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
