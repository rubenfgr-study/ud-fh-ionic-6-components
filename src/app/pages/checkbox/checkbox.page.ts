import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  public checks = [
    { val: 'Pepperoni', color: 'primary', isChecked: true },
    { val: 'Sausage', color: 'secondary', isChecked: false },
    { val: 'Mushroom', color: 'tertiary', isChecked: true },
    { val: 'Tomato', color: 'success', isChecked: false },
    { val: 'Apple', color: 'warning', isChecked: true },
    { val: 'Pear', color: 'danger', isChecked: false },
  ];

  constructor() {}

  ngOnInit() {}

  onClick(check: any) {
    console.log(check);
  }

  showData() {
    console.log(this.checks);
  }
}
