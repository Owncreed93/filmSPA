import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

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

            console.log(movies);

          }

        );
      },

      error => console.error( error )

      // TODO: CALL SERVICE


    );

  }

}
