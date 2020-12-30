import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';

// **************************************************************** //

import { StarRatingComponent } from 'ng-starrating';

// **************************************************************** //

import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Cast } from '../../interfaces/credits-response';
import { combineLatest } from 'rxjs';

// **************************************************************** //
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  public movie: MovieResponse;
  public cast: Cast[] = [] ;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([

      this.peliculasService.getPeliculaDetalle( id ),
      this.peliculasService.getCastDetalle( id )

    ]).subscribe(

      ( [ movie, cast ] ) => {

        if ( !movie ) {

          this.router.navigateByUrl('/home');
          return;

        }

        this.movie = movie;

        this.cast = cast.filter( actor => actor.profile_path != null );

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
