import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/menu.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  menuOptions: Observable<MenuItem[]>;

  constructor(
    private menuController: MenuController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.menuOptions = this.dataService.getMenuOptions();
  }

  showMenu() {
    this.menuController.open('first');
  }
}
