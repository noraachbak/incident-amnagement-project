import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import{UserserviceProvider} from'../../providers/userservice/userservice';
import { SignupPage } from '../signup/signup';
import { RestPage } from '../rest/rest';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserserviceProvider]
})
export class LoginPage {

  public email: any;
  public password: string;

  constructor(public usersService : UserserviceProvider, 
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,  
    public navCtrl: NavController, public navParams: NavParams) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(){

    var that = this;
    
    var loader = this.loadingCtrl.create({
          content: "Please wait..."
        });
        loader.present();
    
    
        this.usersService.loginUserService(this.email, this.password).then(authData => {
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

  forgotPassword(){
    this.navCtrl.push(RestPage);
  }

  redirectToSignup(){
this.navCtrl.push(SignupPage);
          
  }

}
