 import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import{UserserviceProvider} from'../../providers/userservice/userservice';
// /**
//  * Generated class for the RestPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

 @IonicPage()
 @Component({
   selector: 'page-rest',
   templateUrl: 'rest.html',
 })
// export class RestPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad RestPage');
//   }

// }

/**
 * Generated class for the PasswordresetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

export class RestPage {
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usersServi :UserserviceProvider, public alertCtrl: AlertController) {
  }
 
  ionViewDidLoad() {
    // console.log('ionViewDidLoad PasswordresetPage');
   }
 
  reset() {
    let alert = this.alertCtrl.create({
      buttons: ['Ok']
    });
    this.usersServi.passwordreset(this.email).then((res: any) => {
      if (res.success) {
        alert.setTitle('Email Sent');
        alert.setSubTitle('Please follow the instructions in the email to reset your password');
      }
      else {
        alert.setTitle('Failed');
      }
    })


  }
  
 
 
  }
 

