import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import { PremierPage } from '../premier/premier';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [UserserviceProvider]
})
export class SignupPage {


  public email : String;
  public phone : any;
  public password : any;
  public first_name : any;
  public last_name : any;
  


  authForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder,public usersserviceProvider : UserserviceProvider, 
    public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
   

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  doSignup(){

    var   account = {
      first_name: this.first_name,
      last_name: this.last_name || '',
     
      email: this.email,
      phone: this.phone || '',
      password: this.password
     

    };
var that = this;

var loader = this.loadingCtrl.create({
      content: "Please wait...",
      
    });
    loader.present();


  	this.usersserviceProvider.signupUserService(account).then(authData => {
  		//successful
  		loader.dismiss();
  		that.navCtrl.setRoot(HomePage);

  	}, error => {
loader.dismiss();
     // Unable to log in
      let toast = this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      });
      toast.present();

      that.password = ""//empty the password field
  	});

    
  }
  

}