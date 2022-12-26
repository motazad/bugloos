import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ActionType, CtrlType, IFormBuilder} from "../../models/form-builder";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {UserType} from "../../models/userType";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit, OnDestroy {

  @Input() option = new BehaviorSubject<IFormBuilder>({} as IFormBuilder);
  @Input() formValue = new BehaviorSubject<object>({});
  event = new Subject<string>();
  destroy$ = new Subject();
  formGroup: FormGroup = this._fb.group({});
  inputType = CtrlType;
  actionType = ActionType;
  userType = UserType;
  activeUser$ = NavbarComponent.selectedPermission$;

  submitted = false;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.option.pipe(
      takeUntil(this.destroy$)
    ).subscribe(val => {
      val.controls.sort((a,b) => a.order > b.order ? 1 : a.order < b.order ? -1 : 0).forEach(ctrl => this.addCtrl(ctrl.key, ctrl.validation, !ctrl?.optional, ctrl.defaultVal));
      this.listenToSubmit(val.callback);
    });
  }

  addCtrl(ctrlName: string, validation: any, required = false, defaultVal = null) {
    let ctrl = new FormControl(defaultVal, validation);
    if (required) ctrl.addValidators(Validators.required);
    this.formGroup.addControl(ctrlName, ctrl);
  }

  getErrors(error: object|null) {
    if (!error) return [];
    return Object.keys(error)
  }

  submit(action: ActionType) {
    this.submitted = true;
    // if (this.formGroup.invalid) return;
    this.event.next('before:'+action);
    this.event.next(':'+action);
    this.event.next('after:'+action);
    this.formValue.next(this.formGroup.getRawValue());
  }

  listenToSubmit(callback) {
    this.event.pipe(
      takeUntil(this.destroy$)
    ).subscribe((data: string) => {
      let state = data.split(':');
      switch (state[1]) {
        case ActionType.Create: {
          switch (state[0]) {
            case 'before': {
              callback?.beforeCreate ? callback?.beforeCreate() : null;
              console.log(data)
              break;
            }
            case 'after': {
              callback?.afterCreate ? callback?.afterCreate() : null;
              console.log(data)
              break;
            }
            default: {
              callback?.create ? callback?.create() : null;
              console.log(data)
            }
          }
          break;
        }
        case ActionType.Update: {
          switch (state[0]) {
            case 'before': {
              callback?.beforeUpdate ? callback?.beforeUpdate() : null;
              console.log(data)
              break;
            }
            case 'after': {
              callback?.afterUpdate ? callback?.afterUpdate() : null;
              console.log(data)
              break;
            }
            default: {
              callback?.update ? callback?.update() : null;
              console.log(data)
            }
          }
          break;
        }
        case ActionType.Delete: {
          switch (state[0]) {
            case 'before': {
              callback?.beforeDelete ? callback?.beforeDelete() : null;
              console.log(data)
              break;
            }
            case 'after': {
              callback?.afterDelete ? callback?.afterDelete() : null;
              console.log(data)
              break;
            }
            default: {
              callback?.delete ? callback?.delete() : null;
              console.log(data)
            }
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
