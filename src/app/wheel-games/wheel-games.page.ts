import { Component } from '@angular/core';

@Component({
  selector: 'app-wheel-games',
  templateUrl: './wheel-games.page.html',
  styleUrls: ['./wheel-games.page.scss'],
})
export class WheelGamesPage {
  wheelOptions: string[] = [
    'Hit 3 Iron', 
    'Hit 4 Iron', 
    'Hit 5 Iron', 
    'Hit 6 Iron',
    'Hit 7 Iron',
    'Hit 8 Iron',
    'Hit 9 Iron',
    'Hit Wedge',
    'Use Putter',
    'Driver Only',
    'Fairway Wood Only'  ]; // Array of wheel options
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
