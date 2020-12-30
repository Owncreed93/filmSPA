import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

// ************************************************************************* //

import Swiper from 'swiper';

// ************************************************************************* //

import { Cast } from '../../interfaces/credits-response';

// ************************************************************************* //

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styles: [
  ]
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  public mySwiper: Swiper;

  @Input() cast: Cast[];

  constructor() { }

  ngOnInit(): void {

    console.log( this.cast );

  }

  ngAfterViewInit(): void {

    this.mySwiper = new Swiper('.swiper-container', {

      direction: 'horizontal',
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15

    });

  }

}
