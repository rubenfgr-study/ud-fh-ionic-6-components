import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  @ViewChild('myForm') myForm!: FormGroup;

  name = 'Rubén F.G.R';

  user = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit() {}

  save() {
    console.log(this.myForm.value);
  }
}
