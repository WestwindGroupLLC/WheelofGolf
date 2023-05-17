import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
   email: string = '';
   password: string = '';
  
  constructor(private router: Router) { }

  signUp() {
    // Handle signup logic here
    // You can access the entered values using this.email, this.password, this.name
    // Perform the necessary validation and API calls to register the user
    console.log('Email:', this.email);
    console.log('Password:', this.password)
    // Navigate to the Wheel Games Page
    this.router.navigate(['/wheel-games/wheel-games.page.html'])
  }

}
