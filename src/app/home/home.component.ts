import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private navCtrl: NavController) { }

  goToWheelGamesPage () {
    this.navCtrl.navigateForward('wheel-games');
  }

 // openCamera () {
 //   this.openCamera.navi
 // }

//  ngOnInit() {}

}
