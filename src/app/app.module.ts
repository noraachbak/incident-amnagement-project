import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { RestPage } from '../pages/rest/rest';
import{FileChooser} from'@ionic-native/file-chooser';
import {File} from '@ionic-native/file'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { UserserviceProvider } from '../providers/userservice/userservice';
import { FirstPage } from '../pages/first/first';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminnPage } from '../pages/adminn/adminn';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserpagePage } from '../pages//userpage/userpage';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { FilePath } from '../../node_modules/@ionic-native/file-path';
// Initialize Firebase
 var config = {
    apiKey: "AIzaSyDNLVaA0ktZYR0yhP2uHWO2VqyK5gRTI9g",
    authDomain: "blank-71190.firebaseapp.com",
    databaseURL: "https://blank-71190.firebaseio.com",
    projectId: "blank-71190",
    storageBucket: "blank-71190.appspot.com",
    messagingSenderId: "903834159737"
  };
  firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
   SignupPage,
    LoginPage,
    RestPage,
    FirstPage,
    AdminnPage,
    UserpagePage
  
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,  
    IonicStorageModule.forRoot()              
 
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   SignupPage,
  
    LoginPage,
    RestPage,
    FirstPage,
    AdminnPage,
    UserpagePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,FileChooser,File,FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserserviceProvider,
     
  ]
})
export class AppModule {}