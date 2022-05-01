import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css'],
})
export class TvdetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MovieApiService: MovieApiService
  ) {}
  id: string = '';
  details: any = {};
  imagePath: any = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._MovieApiService.getTvdetails(this.id).subscribe((response) => {
      this.details = response;
    });
  }
}
