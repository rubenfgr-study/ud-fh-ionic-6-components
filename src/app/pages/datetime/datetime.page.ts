import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  birthdate: Date = new Date();
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customPickerOptions = {
    buttons: [
      {
        text: 'Hello',
        handler: (event) => console.log(event),
      },
      {
        text: 'World',
        handler: () => {
          console.log('World!');
        },
      },
    ],
  };

  constructor() {}

  ngOnInit() {}

  changedDate(event) {
    console.log(new Date(event.detail.value));
  }
}
