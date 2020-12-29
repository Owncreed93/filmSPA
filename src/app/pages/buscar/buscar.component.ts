import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// ******************************************************************************** //

import { PeliculasService } from '../../services/peliculas.service';

// ******************************************************************************** //

import { Movie } from '../../interfaces/cartelera-response.interface';

// ******************************************************************************** //
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  public searchTerm: string;
  public movies: Movie[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(

      params => {

        console.log(params);
        this.peliculasService.buscarPeliculas( params.texto ).subscribe(

          movies => {

            this.searchTerm = params.texto;

            this.movies = movies;

          }

        );

      },

      error => console.error( error )

      // TODO: CALL SERVICE


    );

  }

}
