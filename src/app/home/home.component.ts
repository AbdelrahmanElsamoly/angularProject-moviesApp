import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  word: any = '';
  movieList: any[] = [];
  tvList: any[] = [];
  searchMovie: any[] = [];
  pageNum: any = 1;
  constructor(private _MovieApiService: MovieApiService) {}

  imagePath: any = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this._MovieApiService
      .getMovie('movie', this.pageNum)
      .subscribe((response) => {
        this.movieList = response.results.slice(0, 15);
      });
    this._MovieApiService.getMovie('tv', this.pageNum).subscribe((response) => {
      this.tvList = response.results.slice(0, 15);
    });
  }

  // search movie
  searchmovie() {
    this._MovieApiService.getsearchMovie(this.word).subscribe((response) => {
      this.word = this.word;
      this.searchMovie = response.results;
    });
  }
  // pagination-movie
  page(numInfo: any) {
    this.pageNum = numInfo.target.innerHTML;
    this._MovieApiService
      .getMovie('movie', this.pageNum)
      .subscribe((response) => {
        this.movieList = response.results.slice(0, 15);
      });
  }
  pagenext() {
    this.pageNum++;
    this._MovieApiService
      .getMovie('movie', this.pageNum++)
      .subscribe((response) => {
        this.movieList = response.results.slice(0, 15);
      });
  }
  pageLast() {
    this.pageNum--;
    this._MovieApiService
      .getMovie('movie', this.pageNum++)
      .subscribe((response) => {
        this.movieList = response.results.slice(0, 15);
      });
  }
  // pagination-Tv
  tvPage(numInfo: any) {
    this.pageNum = numInfo.target.innerHTML;
    this._MovieApiService.getMovie('tv', this.pageNum).subscribe((response) => {
      this.tvList = response.results.slice(0, 15);
    });
    console.log(numInfo.target.innerHTML);
  }
  tvnext() {
    this.pageNum++;
    this._MovieApiService
      .getMovie('tv', this.pageNum++)
      .subscribe((response) => {
        this.tvList = response.results.slice(0, 15);
      });
  }
  tvLast() {
    this.pageNum--;
    this._MovieApiService
      .getMovie('tv', this.pageNum++)
      .subscribe((response) => {
        this.tvList = response.results.slice(0, 15);
      });
  }

  // get latest Movies
  getUpcome(): void {
    this._MovieApiService.Upcome().subscribe((response) => {
      this.movieList = response.results.slice(0, 15);
    });
  }
  getNowPlay(): void {
    this._MovieApiService.getNowPlay().subscribe((response) => {
      this.movieList = response.results.slice(0, 15);
    });
  }
  getPopular(): void {
    this._MovieApiService.getPopular().subscribe((response) => {
      this.movieList = response.results.slice(0, 15);
    });
  }
  getToprated(): void {
    this._MovieApiService.getToprated().subscribe((response) => {
      this.movieList = response.results.slice(0, 15);
    });
  }
}
