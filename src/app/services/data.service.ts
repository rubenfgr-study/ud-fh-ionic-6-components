import { Hero } from './../interfaces/hero.interface';
import { Album } from './../interfaces/album.interface';
import { MenuItem } from './../interfaces/menu.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interfaces';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(tap((users) => console.log(users)));
  }

  getMenuOptions(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('/assets/data/menu-options.json');
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('/assets/data/superheroes.json').pipe(delay(2000));
  }
}
