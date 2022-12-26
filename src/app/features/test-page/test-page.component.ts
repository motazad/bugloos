import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActionType, CtrlType, IFormBuilder} from "../../models/form-builder";
import {UserType} from "../../models/userType";
import {BehaviorSubject, Subject} from "rxjs";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit, OnDestroy {

  formOption$ = new BehaviorSubject<IFormBuilder>({
    formName: 'registration',
    controls: [
      {
        key: 'firstName',
        validation: [Validators.minLength(3), Validators.maxLength(25)],
        permissions: [UserType.User],
        optional: false,
        desc: '',
        title: 'firstName',
        type: CtrlType.String,
        order: 2
      },
      {
        key: 'lastName',
        validation: [Validators.minLength(3), Validators.maxLength(25)],
        permissions: [UserType.User],
        optional: false,
        desc: '',
        title: 'lastName',
        type: CtrlType.String,
        order:1
      },
      {
        key: 'age',
        validation: [Validators.min(14), Validators.maxLength(100)],
        permissions: [UserType.User],
        optional: false,
        desc: '',
        title: 'age',
        type: CtrlType.Number
      },
      {
        key: 'email',
        validation: [Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')],
        permissions: [UserType.User],
        optional: false,
        desc: '',
        title: 'email',
        type: CtrlType.String
      },
      {
        key: 'gender',
        validation: [],
        permissions: [UserType.User],
        optional: false,
        desc: '',
        title: 'gender',
        type: CtrlType.Radio,
        options: {
          items: [
            {
              title: 'male',
              value: 'male'
            },
            {
              title: 'female',
              value: 'female'
            },
          ]
        }
      },
      {
        key: 'birthday',
        validation: [],
        permissions: [UserType.User],
        optional: true,
        desc: '',
        title: 'birthday',
        type: CtrlType.Date
      },
      {
        key: 'work_experience',
        validation: [],
        permissions: [UserType.User],
        optional: true,
        desc: '',
        title: 'work_experience',
        type: CtrlType.RangeDate
      },
      {
        key: 'job_title',
        validation: [],
        permissions: [UserType.User],
        optional: true,
        desc: '',
        title: 'job_title',
        type: CtrlType.DropDown,
        options: {
          keyItemLabel: 'name',
          keyItemValue: 'value',
          items: [
            { name: 'Web Developer', value: 'web_developer' },
            { name: 'Computer Systems Analyst', value: 'computer_systems_analyst' },
            { name: 'Database Administrator', value: 'database_administrator' },
            { name: 'Security Analyst', value: 'security_analyst' },
            { name: 'Mobile applications development ', value: 'mobile_applications_development ' },
          ]
        }
      },
      {
        key: 'description',
        validation: [],
        permissions: [UserType.User, UserType.Admin],
        optional: true,
        desc: '',
        title: 'description',
        type: CtrlType.TextArea,
        size: 12,
        options: {
          rows: 3,
          cols: 2
        }
      },
      {
        key: 'busy',
        validation: [],
        permissions: [],
        optional: false,
        desc: '',
        title: 'imBusy',
        type: CtrlType.CheckBox,
        size: 12,
        defaultVal: true
      },
    ],
    actions: [ActionType.Create, ActionType.Delete, ActionType.Update],
    permissions: [UserType.User, UserType.Admin],
    callback: {
      create: () => {console.warn('clicked on the create button.')}
    }
  });
  formValue$ = new BehaviorSubject({});
  destroy$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.formValue$.subscribe(value => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
