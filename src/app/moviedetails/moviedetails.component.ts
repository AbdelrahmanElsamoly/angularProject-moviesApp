import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  id: string = '';
  tvid: any = {};
  details: any = {};
  imagePath: any = 'https://image.tmdb.org/t/p/w500';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MovieApiService: MovieApiService
  ) {}

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._MovieApiService.getmoviedetals(this.id).subscribe((response) => {
      this.details = response;
    });
  }
}
