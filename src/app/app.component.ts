import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from './interfaces/menu.interface';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  menuOptions: Observable<MenuItem[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.menuOptions = this.dataService.getMenuOptions();
  }
}
