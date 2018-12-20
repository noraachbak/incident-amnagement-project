// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// /*
//   Generated class for the UserserviceProvider provider.

//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class UserserviceProvider {

//   constructor(public http: HttpClient) {
//     console.log('Hello UserserviceProvider Provider');
//   }

// }
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UsersserviceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()



export class UserserviceProvider {

  public data: any;
  public fireAuth: any;
  public userProfile: any;
  public email:any;


  constructor(public http: Http) {

 this.fireAuth = firebase.auth();

  	 this.userProfile = firebase.database().ref(`users`);
  }


  loginUserService(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }


  signupUserService(account: {}){

    
        return this.fireAuth.createUserWithEmailAndPassword(account[`email`], account[`password`]).then((newUser) => {
          //sign in the user
          this.fireAuth.signInWithEmailAndPassword(account[`email`], account[`password`]).then((authenticatedUser) => {
            //successful login, create user profile
          this.userProfile.child(authenticatedUser.uid).set(
            account
          );
          });
        });

  }
  

passwordreset(email) {
  var promise = new Promise((resolve, reject) => {
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
  })
  return promise;
}
}




