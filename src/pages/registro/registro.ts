import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
principal = InicioPage;
usuario = '';
password = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  clickAcceder(){
    if (this.password.length > 0) {
      this.navCtrl.push(this.principal)
      this.push({
        usuario: this.usuario,
        password: this.password
      });
      this.usuario = "";
      this.password  = "";
    }
    else {
      console.log('la nota tiene 0 letras');
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Intente nuevamente',
        buttons: ['OK']
      });
      alert.present();
    }
  
  }
  

}
