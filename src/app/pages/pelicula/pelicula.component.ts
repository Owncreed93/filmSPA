import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

// **************************************************************** //

import { StarRatingComponent } from 'ng-starrating';

// **************************************************************** //

import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';

// **************************************************************** //
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  public movie: MovieResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location
  ) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    this.peliculasService.getPeliculaDetalle( id ).subscribe(

      movie => {

        this.movie = movie;

      },

      error => { console.error(error); }

    );

  }

  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}): void {
    alert(
      `Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`
    );
  }

  onRegresar(): void{

    this.location.back();

  }

}
