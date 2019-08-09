import { Injectable } from '@angular/core';
import ALBUNS from '../album/mock-album';
import { Observable, of } from 'rxjs';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {

  constructor() { }

  public getAlbuns(): Observable<Album[]> {
    return of(ALBUNS);
  }

  public getAlbum(id: number): Observable<Album> {
    return of(ALBUNS.find(album => album.getId() === id));
  }

}