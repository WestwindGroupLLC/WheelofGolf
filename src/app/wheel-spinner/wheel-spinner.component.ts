import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wheel-spinner',
  templateUrl: './wheel-spinner.component.html',
  styleUrls: ['./wheel-spinner.component.scss'],
})
export class WheelSpinnerComponent {
  @Input() options: string[] = [];
@Output() spinCompleted: EventEmitter<string> = new EventEmitter<string>();

selectedOption: string | undefined;
isSpinning: boolean = false;
rotationAngle: number = 0;

spinWheel() {
  if (this.options.length > 0) {
    this.isSpinning = true;
    const randomIndex = Math.floor(Math.random() * this.options.length);
    this.selectedOption = this.options[randomIndex];
    this.animateSpin();

    setTimeout(() => {
      this.isSpinning = false;
      this.spinCompleted.emit(this.selectedOption!);
    }, 3000);
  }
}
animateSpin() {
  const spinInterval = setInterval(() => {
    this.rotationAngle += 10;
    if (this.rotationAngle >= 360) {
      this.rotationAngle = 0;
    }
  }, 50);

  setTimeout(() => {
    clearInterval(spinInterval);
  }, 3000);
}

respinWheel() {
  if (!this.isSpinning) {
    this.selectedOption = undefined;
  }
}

resetWheel() {
  this.selectedOption = undefined;
}

getSegmentColor(option: string): string {
  // Add your logic to return the desired color for each segment
  return 'red';
}

}
