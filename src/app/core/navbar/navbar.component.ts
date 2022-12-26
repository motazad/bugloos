import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserType} from "../../models/userType";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public static selectedPermission$ = new BehaviorSubject<UserType>(UserType.User);

  languageItems = [{label: 'Fa', value: 'fa'}, {label: 'En', value: 'en'}];
  currentLang = 'en';

  permissions = [
    {name: 'Super Admin', value: 'super_admin'},
    {name: 'Admin', value: 'admin'},
    {name: 'User', value: 'user'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeUser(event) {
    const {value} = event;
    NavbarComponent.selectedPermission$.next(value);
    console.log('changed user to', value)
  }

  get selectedPermission() {
    return NavbarComponent.selectedPermission$;
  }

}
