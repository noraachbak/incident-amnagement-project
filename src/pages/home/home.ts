import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { UserpagePage } from '../userpage/userpage';
import { AdminnPage } from '../adminn/adminn';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images = ['photo1.jpg', 'photo2.jpg','photo3.jpg'];
  constructor(public navCtrl: NavController) {

  }
  fonction():void{
    this.navCtrl.push(FirstPage);
  }
  gotoProfile():void{
    this.navCtrl.push(AdminnPage);
  }

}
