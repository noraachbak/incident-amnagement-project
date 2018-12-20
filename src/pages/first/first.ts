import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { getScrollData } from '../../../node_modules/ionic-angular/umd/components/input/input';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, empty } from 'rxjs'
import { FileChooser } from '../../../node_modules/@ionic-native/file-chooser';
import * as firebase from 'firebase/app';
import{File} from '@ionic-native/file';
import { LoadingController } from 'ionic-angular';
import { async } from '../../../node_modules/rxjs/internal/scheduler/async';

/**import { FileChooser, FilePath, File } from 'ionic-native';
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  items;
  arrData = []
  myInput
  authForm : FormGroup;
  url: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder,private fdb: AngularFireDatabase,public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
    this.authForm = fb.group({
		  'username' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5) ])],
      'Destinataire': [null, Validators.compose([Validators.required, Validators.minLength(5) ])],
      'copier': [null, Validators.compose([Validators.required, Validators.minLength(5) ])],
      'Nop': [null, Validators.compose([Validators.required, Validators.minLength(5) ])],
      'Des': [null, Validators.compose([Validators.required, Validators.minLength(5) ])],
		  'gender' : 'e'
    });

      this.fdb.list("/myItems/").valueChanges().subscribe(_data => {
        this.arrData = _data;
   
        console.log(this.arrData);
      });
      this.getDataFromFireBase();
      

    }
    // choose(){
    //   this.fileChooser.open().then((uri)=>{
    //     alert(uri);
    //     this.file.resolveLocalFilesystemUrl(uri).then((newUrl)=>{
    //       alert(JSON.stringify(newUrl));
    //       let dirPath=newUrl.nativeURL;
    //       let dirPathSegments=dirPath.split('/')
    //       dirPathSegments.pop()
    //      dirPath=dirPathSegments.join('/')
    //      this.file.readAsArrayBuffer(dirPath,newUrl.name).then(async(buffer)=>{
    //       await this.upload(buffer,newUrl.name);
    //     })
    //    })
    //   })
    //       }
        //  async upload(buffer,name){
        //     let blob=new Blob([buffer],{type:"image/jpeg"});
        //     let storage=firebase.storage();
        //     storage.ref('images/'+name).put(blob).then((d)=>{
        //       alert("Done");
        //     }).catch((error)=>{
        //       alert(JSON.stringify(error))
        //     })

        //     }

          

        chooseFile():void {
          // open file picker
          document.getElementById('image').click();
        }
        upload() {
          // Create a root reference
          let storageRef = firebase.storage().ref();
          let loading = this.loadingCtrl.create({ content: 'Please wait...' });
          loading.present();
      
          for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
            let path = '/files/' + Date.now() + `${selectedFile.name}`;
            let iRef = storageRef.child(path);
            iRef.put(selectedFile).then(() => {
              loading.dismiss();
              iRef.getDownloadURL().then( url => this.url = url )
            });
            
          }
        }
       


  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }
  Envoyer(typeincident,Description,Sujet,Destinataire,Copieemail,Priorite,Nomutilisateur,Em,url,etatdedemande){
    this.fdb.list("/myItems/").push({
      typeincident:typeincident,
      Description:Description,
      Sujet:Sujet,
      Nomutilisateur:Nomutilisateur,
      Em:Em,
      Destinataire:Destinataire,
      Copieemail:Copieemail,
      Priorite:Priorite,
      url:url,
      etatdedemande:etatdedemande,
    });
    const alert = this.alertCtrl.create({
      title: 'Demande!',
      subTitle: 'Votre demande a été envoyée avec succès!',
      buttons: ['OK']
    });
    alert.present();
   

  }
  
  getDataFromFireBase(){
    this.fdb.list("/myItems/").valueChanges().subscribe(_data => {
     
      this.items=_data
      console.log(_data);
      
    })

  }
  

}
