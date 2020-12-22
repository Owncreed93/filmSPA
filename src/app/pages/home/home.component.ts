import { Component, HostListener, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';

// ************************************************************************ //

import { PeliculasService } from '../../services/peliculas.service';


// ************************************************************************ //

import { Movie } from '../../interfaces/cartelera-response.interface';

// ************************************************************************ //
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(): void{

    const pos = (document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );

    if ( pos > max ) {

      // TODO: call service
      this.peliculasService.getCartelera()
      .pipe( pluck('results') )
      .subscribe(
        resp => {

          this.movies.push(...resp);

        },

        error => {

          console.error( error );

        }

      );

    }


  }

  constructor( private peliculasService: PeliculasService) { }

  ngOnInit(): void {

    // REQUEST MOVIES INFORMATION
    this.obtenerPeliculas();

  }

  obtenerPeliculas(): any {

    this.peliculasService.getCartelera().pipe(
      pluck('results')
    ).subscribe(

      resp  => {

        this.movies = resp;
        this.moviesSlideShow = resp.slice(0, 4);

      },

      error => {

        console.error(error);

      }

    );

  }

}
