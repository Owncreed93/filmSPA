import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, pluck, catchError } from 'rxjs/operators';

// ************************************************************************ //

import { CarteleraResponse, Movie } from '../interfaces/cartelera-response.interface';
import { MovieResponse } from '../interfaces/movie-response';
import { CreditsResponse, Cast } from '../interfaces/credits-response';

// ************************************************************************ //
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage: number = 1;
  public cargando: boolean = false;

  constructor( private http: HttpClient ) {}

  /**
   * params This function captures params for the API call to TMDB
   * @param api_key: Holds the api key of TMDB API
   * @param language: Holds the value of langauge ss-SS
   * @param page: Holds the page's number (requires parser if sent as params)
   */
  get params(): any {

    return {

      api_key: '18e0aaa63f8dd1a77dd97bcf507dda4f',
      language: 'es-ES',
      page: this.carteleraPage

    };

  }

  resetCarteleraPage(): void {

    this.carteleraPage = 1;

  }

  getCartelera(): Observable<Movie[]> {

    // CARGANDO PELICULAS
    if ( this.cargando ) { return of([]); }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, { params: this.params})
      .pipe(
        pluck( 'results'),
        tap( () => {

          this.carteleraPage += 1;
          this.cargando = false;

        })
      );

  }

  buscarPeliculas( texto: string ): Observable<Movie[]> {

    const params = { ...this.params, page: 1, query: texto };

    return this.http.get<CarteleraResponse>( `${this.baseUrl}/search/movie`, { params } )
    .pipe( pluck('results') );


  }

  getPeliculaDetalle( id: string ): Observable<any>{

    return this.http.get<MovieResponse>( `${this.baseUrl}/movie/${id}`, { params: this.params } ).pipe(
      catchError( err => of([]) )
    );

  }

  getCastDetalle( id: string ): Observable<Cast[]>{

    return this.http.get<CreditsResponse>( `${this.baseUrl}/movie/${id}/credits`, { params: this.params } ).pipe(
      pluck( 'cast' ),
      catchError( err => of([]) )
    );

  }

}
