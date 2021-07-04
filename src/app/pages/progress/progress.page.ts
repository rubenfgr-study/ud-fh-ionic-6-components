import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  percentage = 0.05;

  constructor() { }

  ngOnInit() {
  }

  changeRange(event) {
    this.percentage = event.detail.value.upper / 100;
  }

}
