import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string; //define the email property
  password: string; //define the password property

  constructor() {
    this.email = '';
    this.password = '';
   }

}
