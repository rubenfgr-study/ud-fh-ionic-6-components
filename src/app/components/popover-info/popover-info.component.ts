import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {
  items = Array(7);

  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  onClick(item) {
    this.popoverController.dismiss({ dismiss: true, item });
  }
}
