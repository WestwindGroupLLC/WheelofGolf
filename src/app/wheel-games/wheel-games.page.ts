import { Component } from '@angular/core';

@Component({
  selector: 'app-wheel-games',
  templateUrl: './wheel-games.page.html',
  styleUrls: ['./wheel-games.page.scss'],
})
export class WheelGamesPage {
  wheelOptions: string[] = [
    'Option 1', 
    'Option 2', 
    'Option 3', 
    'Option 4',]; // Array of wheel options
  selectedOption: string = ''; // Variable to store the selected option

  constructor() {}

  spinWheel() {
    // Logic to randomly select an option from the wheelOptions array
    const randomIndex = Math.floor(Math.random() * this.wheelOptions.length);
    this.selectedOption = this.wheelOptions[randomIndex];
  }
  onSpinCompleted(event: any) {
    // Handle the spin completed event here
  }
  

  resetWheel() {
    // Logic to reset the selected option to an empty string
    this.selectedOption = '';
  }
}
