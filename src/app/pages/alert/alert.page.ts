import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  AnimationController,
  createAnimation,
} from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {
  constructor(
    private alertController: AlertController,
    private animationController: AnimationController
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      backdropDismiss: false,
      animated: true,
      cssClass: '',
      enterAnimation: (baseEl: any, opts?: any) =>
        this.animationController
          .create()
          .addElement(baseEl.querySelector('.alert-wrapper'))
          .duration(250)
          .keyframes([
            { offset: 0, opacity: '0' },
            { offset: 1, opacity: '1' },
          ]),
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'red',
        },
      ],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2',
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3',
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever',
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12',
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10,
        },
        {
          name: 'name7',
          type: 'number',
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal',
          },
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (v) => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (v) => {
            console.log('Confirm Ok');
            console.log(v);
          },
        },
      ],
    });

    await alert.present();
  }
}
