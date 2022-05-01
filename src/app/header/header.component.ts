import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() headerTrendingMovies: any[] = [];
  imagePath: any = 'https://image.tmdb.org/t/p/w500';
  constructor() {}
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 5,
      },
      740: {
        items: 7,
      },
      940: {
        items: 8,
      },
    },
    nav: true,
  };

  ngOnInit(): void {}
}
