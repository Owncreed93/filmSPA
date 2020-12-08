import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

// ************************************************************************************************** //

import { CarteleraResponse } from './interfaces/cartelera-response.interface';

// ************************************************************************************************** //
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peliculasApp';

  constructor( private peliculasService: PeliculasService ){

    this.peliculasService.getCartelera().subscribe(

      resp  => {
        console.log(resp);
        
      },

      error => {
        console.log(error);
      }

    )

  }

}
