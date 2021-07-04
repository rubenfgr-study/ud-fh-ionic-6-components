import { Observable } from 'rxjs';
import { User } from './../../interfaces/user.interfaces';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('ionList') ionList: IonList;
  users: Observable<User[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite(user: User) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  share(user: User) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  remove(user: User) {
    console.log('Remove: ', user.name);
    this.ionList.closeSlidingItems();
  }
}
