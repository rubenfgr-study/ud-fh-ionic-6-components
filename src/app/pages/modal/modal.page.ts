import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async showModal() {
    const modalInfo = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        name: 'Rubén',
        country: 'Spain',
      },
    });
    modalInfo.onDidDismiss().then((data) => console.log(data));
    await modalInfo.present();
  }
}
