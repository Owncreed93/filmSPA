import { Component, OnInit, Input, AfterViewInit } from '@angular/core';


// ********************************************************************************* //

import { Movie } from '../../interfaces/cartelera-response.interface';

// ********************************************************************************* //

import Swiper from 'swiper';

// ********************************************************************************* //

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styles: [
    `
    .swiper-container {
      height: 330px;
      width: 100%;
    }

    .swiper-button-prev,
    .swiper-button-next{
      color: #ffffff;
    }

    .movie-description{
      background-color: rgba( 0, 0, 0, 0.3 );
      bottom: 0;
      padding: 5px;
      position: absolute;
      width: 100%;
    }

    `
  ]
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[] = [];

  public mySwiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {

    this.mySwiper = new Swiper('.swiper-container', {

      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },

    });

  }

  ngOnInit(): void {

  }

  onSlideNext(): void{
    this.mySwiper.slideNext();
  }

  onSlidePrev(): void{
    this.mySwiper.slidePrev();
  }





}
