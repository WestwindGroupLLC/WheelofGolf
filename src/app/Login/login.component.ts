import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    // Perform login logic here
  }
}
