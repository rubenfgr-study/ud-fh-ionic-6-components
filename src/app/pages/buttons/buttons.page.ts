import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  favorite = false;

  constructor() { }

  ngOnInit() {
  }

  addToFavorites() {
    console.log('addToFavorites');
    this.favorite = !this.favorite;
  }

}
