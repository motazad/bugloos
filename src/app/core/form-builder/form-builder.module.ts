import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    FormBuilderComponent
  ],
  exports: [
    FormBuilderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FormBuilderModule { }
