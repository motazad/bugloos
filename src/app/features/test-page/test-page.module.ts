import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPageRoutingModule } from './test-page-routing.module';
import {TestPageComponent} from "./test-page.component";
import {SharedModule} from "../../shared/shared.module";
import {FormBuilderModule} from "../../core/form-builder/form-builder.module";


@NgModule({
  declarations: [
    TestPageComponent
  ],
    imports: [
        CommonModule,
        TestPageRoutingModule,
        SharedModule,
        FormBuilderModule
    ]
})
export class TestPageModule { }
