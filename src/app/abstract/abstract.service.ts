import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

export class AbstractService<T> {

    public URL: string = 'https://jsonplaceholder.typicode.com';
    
    constructor(public url: string,  public http: HttpClient) {
        this.URL = `${this.URL}/${url}`;
    }

    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error);
          console.error(`${operation} failed: ${error.message}`);
    
          return of(result as T);
        }
      }

      public findById(id: number): Observable<T> {
        const urlId = `${this.URL}/${id}`;
        return this.http.get<T>(urlId)
        .pipe(
          tap(_ => console.log(`fetched album id = ${id}`)),
          catchError(this.handleError<T>(`getAlbum id=${id}`))
        );
      }

      public findAll(): Observable<T[]> {
        return this.http.get<T[]>(this.URL)
        .pipe(
          tap(_ => console.log('fetched Fotos'),
          catchError(this.handleError<T[]>('getFoto', []))
          ))
      }

}