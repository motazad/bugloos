import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NavbarModule} from "./navbar/navbar.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `./assets/i18n/`,
    '.json'
  );
}

@NgModule({
  declarations: [],
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // general component
    NavbarModule,

    // 3rd party
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (httpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    // 3rd party
    TranslateModule,

    // general component
    NavbarModule
  ]
})
export class CoreModule { }
