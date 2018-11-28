import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { UsuarioregPage } from '../usuarioreg/usuarioreg';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  regis = RegistroPage;
  ureg = UsuarioregPage;


  usuarios = [
    {
      nombre: '',
      mail: '',
      password: ''
    }
  ];
  usuario = '';
  password = '';
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }
  clickInicio(){
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
        subTitle: 'Rellena los campos de Usuario y Contraseña para acceder al sitio.',
        buttons: ['OK']
      });
      alert.present();
    }

  }

ClickRegistrarse(){
  this.navCtrl.push(this.regis)
}

clickUsuariosReg(){
  this.navCtrl.push(this.ureg)
}
}
