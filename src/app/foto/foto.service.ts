import { Injectable } from '@angular/core';
import FOTOS from './mock-fotos';
import { Observable, of } from 'rxjs';
import { Foto } from './foto';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor() { }

  findFotosById(idFoto: number): Observable<Foto> {
    return of(FOTOS.find(foto => foto.getId() === idFoto));
  }

  findFotosByIdAlbum(idAlbum: number): Observable<Foto[]> {
    console.log(FOTOS);
    return of(FOTOS.filter(foto => foto.getAlbum().getId() === idAlbum));
  }

}
