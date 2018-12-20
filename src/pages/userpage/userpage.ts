import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the UserpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html',
})
export class UserpagePage {
  getInfo = {
    name :'',
    userPhoto: '',
    email : '',
    loggedin : false 
}
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage ) {
   
   
    this.storage.get('name').then((val) => {
      this.getInfo.name  = val;
});      
   
  this.storage.get('userPhoto').then((val) => {
      this.getInfo.userPhoto  = val;
}); 
   
   this.storage.get('email').then((val) => {
      this.getInfo.email  = val;
});      
this.storage.get('loggedin').then((val) => {
      this.getInfo.loggedin  = val;
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpagePage');
  }

}
