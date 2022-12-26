import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {SelectButtonModule} from "primeng/selectbutton";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";
import {RadioButtonModule} from "primeng/radiobutton";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextareaModule} from "primeng/inputtextarea";
import {PanelModule} from "primeng/panel";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,

    // primeng
    SelectButtonModule,
    DropdownModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    CalendarModule,
    CheckboxModule,
    InputTextareaModule,
    PanelModule
  ],
  exports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,

    // primeng
    SelectButtonModule,
    DropdownModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    CalendarModule,
    CheckboxModule,
    InputTextareaModule,
    PanelModule
  ]
})
export class SharedModule { }
