import { PopoverInfoComponent } from './../../components/popover-info/popover-info.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  async showPopoverInfo(event) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      componentProps: {
        name: 'Rubén',
        country: 'Spain',
      },
      event,
      translucent: true,
      backdropDismiss: false,
    });

    await popover.present();
    popover.onDidDismiss().then(({ data }) => console.log(data));
  }
}
