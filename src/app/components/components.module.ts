import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ***************************************************************************** //

import { RatingModule } from 'ng-starrating';

// ***************************************************************************** //

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';

// ***************************************************************************** //

import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

// ***************************************************************************** //

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ]
})
export class ComponentsModule { }
