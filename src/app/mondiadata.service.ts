import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category, Movie } from './model';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable({ providedIn: 'root' })
export class MondiadataService {
  private apiUrl = 'http://localhost:8080';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET categories from the server */
  getCategories(): Observable<Category[]> {
    debugger;
    return this.http.get<Category[]>(this.apiUrl + '/categories', httpOptions)
      .pipe(
        tap(_ => this.log('fetched categories')),
        catchError(this.handleError('getCategories', []))
      );
  }


  /** GET hero by id. Will 404 if id not found */
  getMovies(categoryId: number): Observable<Movie[]> {
    //*** */const url = `${this.apiUrl}/categories/${categoryId}/movies`;
    const url = `${this.apiUrl}/categories/${categoryId}/movies`;

    return this.http.get<Movie[]>(url, httpOptions).pipe(
      // map(movie => movie.id),
      tap(_ => this.log(`fetched hero id=${categoryId}`)),
      //  catchError(this.handleError<Movie>(`getHero id=${id}`))
      catchError(this.handleError('getMovies', []))

    );

  }


  /** GET movie by id. Will 404 if id not found */
  getMovie(id: number, categoryId: number): Observable<Movie> {

    const url = `${this.apiUrl}/categories/${categoryId}/movies/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log(`fetched movie id=${id}`)),
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }


  /** PUT: update the movie on the server */
  updateMovie(movie: Movie): Observable<any> {

    const url = `${this.apiUrl}/categories/${movie.categoryId}/movies/${movie.id}`;
    return this.http.put(url, movie, httpOptions).pipe(
      tap(_ => this.log(`updated movie id=${movie.id}`)),
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** Log a DataService message with the MessageService */
  private log(message: string) {
    //** */this.messageService.add(`HeroService: ${message}`);
  }


}
