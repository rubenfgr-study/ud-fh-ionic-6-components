import { Album } from './../../interfaces/album.interface';
import { User } from './../../interfaces/user.interfaces';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: Album[] = [];
  searchText = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(albums => this.albums = albums);
    console.log(this.albums);
  }

  onSearchChange(event) {
    this.searchText = event.detail.value;
  }

}
