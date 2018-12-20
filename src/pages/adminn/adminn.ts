import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs'
/**
 * Generated class for the AdminnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminn',
  templateUrl: 'adminn.html',
})
export class AdminnPage {
  items;
  arrData = []
  // arrData = []
  // myInput
  constructor(public navCtrl: NavController, public navParams: NavParams,private fdb: AngularFireDatabase) {
    this.fdb.list("/myItems/").valueChanges().subscribe(_data => {
      this.arrData = _data;
 
      console.log(this.arrData);
    });
    this.getDataFromFireBase();
  }
  getDataFromFireBase(){
    this.fdb.list("/myItems/").valueChanges().subscribe(_data => {
     
      this.items=_data
      console.log(_data);
      
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminnPage');
  }
  // btnAddClicked(){
  //   this.fdb.list("/myItems/").push(this.myInput);
  // }
 
  // delete (i){
  //   this.fdb.list("/myItems/").remove(this.arrData[i].$key);
  // }


}
