import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _Httpclient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userData') != null) {
      this.saveData();
    }
  }
  user = new BehaviorSubject(null);
  saveData(): void {
    let decodeData = JSON.stringify(localStorage.getItem('userData'));
    this.user.next(jwtDecode(decodeData));
  }
  logout() {
    localStorage.removeItem('userData');
    this.user.next(null);
    this._Router.navigate(['/login']);
  }

  postApi(registerList: object): Observable<any> {
    return this._Httpclient.post(
      'https://routeegypt.herokuapp.com/signup',
      registerList
    );
  }
  logApi(loginList: Object): Observable<any> {
    return this._Httpclient.post(
      'https://routeegypt.herokuapp.com/signin',
      loginList
    );
  }
}
