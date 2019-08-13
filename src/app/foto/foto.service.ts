import { Injectable } from '@angular/core';
import { Foto } from './foto';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AbstractService } from '../abstract/abstract.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoService extends AbstractService<Foto> {
  
  urlAlbuns: string = "/albums";

  constructor(http: HttpClient) {
    super("photos", http);    
   }

  public findByIdAlbum(idAlbum: number): Observable<Foto[]> {
    let params = new HttpParams().set('idAlbum', idAlbum.toString());
    return this.http.get<Foto[]>(`${this.URL}`, {params: params });
  }

}
