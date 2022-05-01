import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private _HttpClient: HttpClient) {}

  getsearchMovie(searchWord: any): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchWord}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`
    );
  }

  getMovie(data: string, pageNum: any): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/${data}/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&page=${pageNum}`
    );
  }
  getmoviedetals(id: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`
    );
  }
  getTvdetails(tvid: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/tv/${tvid}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`
    );
  }

  //  get latest movies
  Upcome(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1'
    );
  }
  // get Now Playing
  getNowPlay(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1'
    );
  }
  // getThepopularMovies
  getPopular(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1'
    );
  }
  // get top rated
  getToprated(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1'
    );
  }
}
