import { Injectable } from '@angular/core';
import { Album } from './album';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractService } from '../abstract/abstract.service';

@Injectable({
  providedIn: 'root'
})

export class AlbumService extends AbstractService<Album> {

  constructor(http: HttpClient) {
    super("albums", http);
   }

}