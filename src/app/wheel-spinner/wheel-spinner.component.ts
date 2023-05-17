import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-wheel-spinner',
  templateUrl: './wheel-spinner.component.html',
  styleUrls: ['./wheel-spinner.component.scss'],
})
export class WheelSpinnerComponent implements OnInit {
  @Input() options: string[] = []; // Array of wheel options passed from the parent component
  @Output() spinCompleted: EventEmitter<string> = new EventEmitter<string>(); // Event emitter to notify the parent component about the selected option
  @ViewChild('wheelContainer', { static: true }) wheelContainer!: ElementRef;

  selectedOption: string = ''; // Variable to store the selected option

  ngOnInit() {
    // Access the wheelContainer ElementRef here and perform any necessary actions
    console.log(this.wheelContainer);
  }

  spinWheel() {
    // Logic to randomly select an option from the options array
    const randomIndex = Math.floor(Math.random() * this.options.length);
    this.selectedOption = this.options[randomIndex];
    this.spinCompleted.emit(this.selectedOption); // Emit the selected option to the parent component
  }
}
