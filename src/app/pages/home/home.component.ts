import { Component, OnInit } from '@angular/core';
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

      },

      error => {

        console.error(error);

      }

    );

  }

}
